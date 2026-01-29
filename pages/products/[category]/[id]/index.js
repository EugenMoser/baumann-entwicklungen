//products details

import 'react-image-gallery/styles/css/image-gallery.css';

import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

import { mdiChevronLeft } from '@mdi/js';
import Icon from '@mdi/react';

import Articles from '../../../../components/Articles';
import ColorButtons from '../../../../components/ColorButtons';
import ShowSelection from '../../../../components/ShowSelection';
import { baseUrl } from '../../../../helpers/constants';
import { getAllProductsFromDB } from '../../../../helpers/db-services';
import { strings } from '../../../../helpers/strings';

//**************** für static website */
const getProducts = async () => {
  return await getAllProductsFromDB();
};

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return {
      params: {
        category: product.category,
        id: product.product_id.toString(),
      },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const category = context.params.category;
  const products = await getProducts();
  const filterdProduct = products.filter(
    (product) => product.product_id.toString() === id,
  );
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );
  return {
    props: {
      staticProduct: filterdProduct,
      staticProducts: filteredProducts,
      category: category,
    },
  };
}

//****************************** */

export const metadata = {
  title: "TESTTITEL",
};

function ProductDetails({
  //******** für static website */
  staticProduct,
  //allProducts,
  searchInputText,
  setSearchInputText,
}) {
  //**************** für static website */
  const product = staticProduct[0];

  const router = useRouter();
  const { category } = router.query;

  // const { id } = router.query;
  // const product = productById(id);
  //#################### */
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // useEffect(() => {
  //   setFilteredProducts(findProducts(searchInputText, product));
  // }, [searchInputText]);
  //****************************** */

  // if (!allProducts || !product) {
  //   return <h2>Produkte werden geladen</h2>;
  // }

  const selectFirstColor = product?.colors[0];
  const [selectedArticle, setSelectedArticle] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(selectFirstColor);
  const {
    product_name: name,
    product_description1: description1,
    product_description2: description2,
    product_description3: description3,
    product_description4: description4,
    product_material: material,
    product_imagepath_big1: image1,
    product_imagepath_big2: image2,
    product_imagepath_big3: image3,
    metadata,
    keywords,
  } = product;

  const images = [];

  useEffect(() => {
    if (searchInputText.length > 0) {
      router.push(`/products/${category}`);
    }
  }, [searchInputText]);

  // Erstelle SEO-optimierten Alt-Text mit Kategorie-Kontext
  const getCategoryName = (cat) => {
    const categoryMap = {
      moebel: "Möbelbereich",
      halterung: "Halterungsbereich",
      wasser: "Wasserbereich",
      lueftung: "Lüftungsbereich",
      elektro: "Elektrobereich",
    };
    return categoryMap[cat] || "";
  };

  const baseAltText = `${name} - ${getCategoryName(
    category,
  )} - Baumann Kunststoffspritzgussteile`;

  if (image1) {
    images.push({
      original: image1,
      thumbnail: image1,
      originalAlt: baseAltText,
    });
  }
  if (image2) {
    images.push({
      original: image2,
      thumbnail: image2,
      originalAlt: `${baseAltText} - Detail`,
    });
  }

  if (image3) {
    images.push({
      original: image3,
      thumbnail: image3,
      originalAlt: `${baseAltText} - Ansicht`,
    });
  }

  // //filter products by id
  // function productById(id) {
  //   const filteredProduct = allProducts.find(
  //     (product) => product.product_id.toString() === id
  //   );
  //   return filteredProduct;
  // }

  function selectedArticleSetter(articleId) {
    const articleObject = product.articles.find(
      (article) => article.article_id === articleId,
    );
    setSelectedArticle(articleObject);
  }

  function selectedColorSetter(color) {
    setSelectedColor(color);
  }
  function goBack() {
    router.push(`/products/${category}`);
  }

  const ogImage = image1 ? `${baseUrl}${image1}` : "";
  const currentUrl = `${baseUrl}/products/${category}/${product.product_id}`;

  return (
    <>
      <Head>
        <title>{metadata}</title>
        <meta
          name="description"
          content={name + " " + description1}
        />
        <meta
          name="keywords"
          content={keywords}
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:type"
          content="product"
        />
        <meta
          property="og:url"
          content={currentUrl}
        />
        <meta
          property="og:title"
          content={metadata}
        />
        <meta
          property="og:description"
          content={name + " " + description1}
        />
        {ogImage && (
          <meta
            property="og:image"
            content={ogImage}
          />
        )}

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
          content={metadata}
        />
        <meta
          property="twitter:description"
          content={name + " " + description1}
        />
        {ogImage && (
          <meta
            property="twitter:image"
            content={ogImage}
          />
        )}

        {/* Structured Data for Product search engine optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: name,
              image: [image1, image2, image3]
                .filter(Boolean)
                .map((img) => `${baseUrl}${img}`),
              description: description1,
              sku: product.product_id.toString(),
              mpn: product.product_id.toString(),
              brand: {
                "@type": "Brand",
                name: "Baumann Entwicklungen",
              },
              manufacturer: {
                "@type": "Organization",
                name: "Baumann Entwicklungen",
                url: baseUrl,
              },
              material: material,
              category: getCategoryName(category),
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "EUR",
                seller: {
                  "@type": "Organization",
                  name: "Baumann Entwicklungen",
                },
                url: currentUrl,
              },
            }),
          }}
        />
      </Head>

      <StyledHeadlineWrapper>
        <StyledH1>{name}</StyledH1>
        <StyledBackButton onClick={() => goBack()}>
          <Icon
            path={mdiChevronLeft}
            size={1}
          />
          {strings.backButton}
        </StyledBackButton>
      </StyledHeadlineWrapper>
      <Descripton1>{description1}</Descripton1>
      <Wrapper>
        <ProductWrapper>
          {description2 && <p>{description2}</p>}
          {description3 && <p>{description3}</p>}
          {description4 && <p>{description4}</p>}

          <p>
            {strings.materialLabel}: {material}
          </p>
          <StyledImageGalleryWrapper>
            <ImageGallery
              items={images}
              showBullets={false}
              showThumbnails={image2 || image3 ? true : false}
              showPlayButton={false}
              slideDuration={300}
              showFullscreenButton={false}
              showNav={image2 || image3 ? true : false}
            />
          </StyledImageGalleryWrapper>
        </ProductWrapper>

        <ArticleWrapper>
          {product.articles && (
            <Articles
              articles={product.articles}
              selectedArticleSetter={selectedArticleSetter}
            />
          )}

          {product.colors && (
            <ColorButtons
              colors={product.colors}
              selectedColor={selectedColor}
              selectedColorSetter={selectedColorSetter}
              firstColorName={selectFirstColor.color_name}
            />
          )}
          <ShowSelection
            selectedArticle={selectedArticle}
            selectedColor={selectedColor}
          />
        </ArticleWrapper>
      </Wrapper>
    </>
  );
}

export default ProductDetails;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const StyledHeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  text-align: start;
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: 780px) {
    font-size: 1.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: transparent;
  /* border: 1px solid var(--background-showSelection-border); */
  border-radius: 4px;

  cursor: pointer;
  font-size: 1rem;

  :hover,
  :focus {
    font-weight: bold;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  gap: 1.75rem;
`;

const StyledImageGalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  .image-gallery-image {
    width: 500px;
  }
  @media (max-width: 1400px) {
    .image-gallery-image {
      width: 100%;
    }
  }
  .image-gallery-svg {
    opacity: 0.1;
    :hover,
    :focus {
      opacity: 1;
    }
  }
`;

const Descripton1 = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  gap: 1.75rem;
`;
