import { useEffect, useState } from "react";

import Head from "next/head";
import styled from "styled-components";

import ProductList from "../../../components/ProductList";
import { baseUrl, sections } from "../../../helpers/constants";
import { getAllProductsFromDB } from "../../../helpers/db-services";
import {
  findProducts,
  getProductsByCategory,
} from "../../../helpers/services";

export async function getStaticPaths() {
  const products = await getAllProductsFromDB();
  const paths = products.map((product) => ({
    params: { category: product.category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const products = await getAllProductsFromDB();
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );
  return { props: { staticProducts: filteredProducts } };
}

function ProductCategory({
  staticProducts,
  searchInputText,
  setSearchInputText,
}) {
  const allProducts = staticProducts;
  const category = allProducts?.[0]?.category;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(findProducts(searchInputText, staticProducts));
  }, [searchInputText, staticProducts]);

  const productsToShow =
    searchInputText.length && filteredProducts.length
      ? getProductsByCategory(filteredProducts, category)
      : getProductsByCategory(allProducts, category);

  const allArticleNumbers = allProducts
    ? allProducts
        .flatMap((p) =>
          p.articles
            ? p.articles.map((a) => a.article_number).filter(Boolean)
            : [],
        )
        .slice(0, 20)
    : [];

  const allProductNames = allProducts
    ? allProducts.map((p) => p.product_name).filter(Boolean)
    : [];

  return (
    <>
      {sections.map((section) => {
        if (section.category === category) {
          const currentUrl = `${baseUrl}/products/${category}`;
          // SEO-optimierter Titel
          const seoTitle = `${section.name} | Baumann Kunststoffspritzgussteile`;

          // SEO-optimierte Beschreibung
          const productNamesList = allProductNames.slice(0, 5).join(", ");
          const seoDescription = `${
            section.name
          }: ${productNamesList}. Kunststoffspritzgussteile von Baumann Entwicklungen. ${
            allArticleNumbers.length
              ? `Artikelnummern: ${allArticleNumbers
                  .slice(0, 8)
                  .join(", ")}`
              : ""
          }`.slice(0, 320);

          // Keywords mit Artikelnummern und Produktnamen erweitern
          const seoKeywords = [
            section.keywords,
            ...allArticleNumbers.slice(0, 15),
            ...allProductNames,
          ]
            .filter(Boolean)
            .join(", ");

          // ItemList Structured Data für Kategorieseite
          const itemListData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: section.name,
            description: seoDescription,
            url: currentUrl,
            numberOfItems: allProducts ? allProducts.length : 0,
            itemListElement: allProducts
              ? allProducts.map((product, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: product.product_name,
                  url: `${baseUrl}/products/${category}/${product.product_id}`,
                  image: product.product_imagepath_big1
                    ? `${baseUrl}${product.product_imagepath_big1}`
                    : undefined,
                }))
              : [],
          };

          // Breadcrumb Structured Data
          const breadcrumbData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: baseUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: section.name,
                item: currentUrl,
              },
            ],
          };

          return (
            <Head key={section.category}>
              <title>{seoTitle}</title>
              <meta
                name="description"
                content={seoDescription}
              />
              <meta
                name="keywords"
                content={seoKeywords}
              />
              <link
                rel="canonical"
                href={currentUrl}
              />
              <meta
                name="robots"
                content="index, follow"
              />

              {/* Open Graph / Facebook */}
              <meta
                property="og:type"
                content="website"
              />
              <meta
                property="og:url"
                content={currentUrl}
              />
              <meta
                property="og:title"
                content={seoTitle}
              />
              <meta
                property="og:description"
                content={seoDescription}
              />
              <meta
                property="og:site_name"
                content="Baumann Entwicklungen"
              />
              <meta
                property="og:image"
                content={`${baseUrl}/images/baumann_logo_optimiert.png`}
              />

              {/* Twitter */}
              <meta
                property="twitter:card"
                content="summary_large_image"
              />
              <meta
                property="twitter:url"
                content={currentUrl}
              />
              <meta
                property="twitter:title"
                content={seoTitle}
              />
              <meta
                property="twitter:description"
                content={seoDescription}
              />
              <meta
                property="twitter:image"
                content={`${baseUrl}/images/baumann_logo_optimiert.png`}
              />

              {/* ItemList Structured Data */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(itemListData),
                }}
              />

              {/* Breadcrumb Structured Data */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(breadcrumbData),
                }}
              />
            </Head>
          );
        }
      })}

      {productsToShow?.length ? (
        <ProductList
          products={productsToShow}
          category={category}
          setSearchInputText={setSearchInputText}
        />
      ) : (
        <StyledParagraph>kein Produkt gefunden</StyledParagraph>
      )}
    </>
  );
}
export default ProductCategory;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;
