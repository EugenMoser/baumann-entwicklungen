//products by category
import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import styled from 'styled-components';

import ProductList from '../../../components/ProductList';
import {
  baseUrl,
  sections,
} from '../../../helpers/constants';
import { getAllProductsFromDB } from '../../../helpers/db-services';
import {
  findProducts,
  getProductsByCategory,
} from '../../../helpers/services';

//**************** für static website */

const getProducts = async () => {
  return await getAllProductsFromDB();
};

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return { params: { category: product.category } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const category = context.params.category;
  const products = await getProducts();
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );
  return { props: { staticProducts: filteredProducts } };
}

//****************** */

function ProductCategory({
  //******** für static website */
  staticProducts,
  // allProducts,
  // filteredProducts,
  searchInputText,
  setSearchInputText,
}) {
  //**************** für static website */
  const allProducts = staticProducts;
  const category = allProducts && allProducts[0].category;
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(findProducts(searchInputText, staticProducts));
  }, [searchInputText]);
  // useEffect(() => {
  //   setSearchInputText('');
  // }, []);
  // const router = useRouter();
  // const { category } = router.query;

  //****************** */

  const searchgetProductsByCategory =
    searchInputText.length && filteredProducts
      ? getProductsByCategory(filteredProducts, category)
      : getProductsByCategory(allProducts, category);

  return (
    <>
      {sections.map((section) => {
        if (section.category === category) {
          const currentUrl = `${baseUrl}/products/${category}`;
          return (
            <Head key={section.category}>
              <title>{section.name}</title>
              <meta
                name="description"
                content={`Sie befinden sich im ${section.name}`}
              />
              <meta
                name="keywords"
                content={section.keywords}
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
                content={section.name}
              />
              <meta
                property="og:description"
                content={`Sie befinden sich im ${section.name}`}
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
                content={section.name}
              />
              <meta
                property="twitter:description"
                content={`Sie befinden sich im ${section.name}`}
              />
              <meta
                property="twitter:image"
                content={`${baseUrl}/images/baumann_logo_optimiert.png`}
              />
            </Head>
          );
        }
      })}

      {searchgetProductsByCategory &&
      searchgetProductsByCategory.length ? (
        <ProductList
          products={searchgetProductsByCategory}
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
