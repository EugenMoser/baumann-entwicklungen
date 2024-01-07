//products details

import "react-image-gallery/styles/css/image-gallery.css";

import * as React from "react";
import { useEffect, useState } from "react";

import ImageGallery from "react-image-gallery";
import styled from "styled-components";

import Articles from "../../../../components/Articles";
import ColorButtons from "../../../../components/ColorButtons";
import ProductList from "../../../../components/ProductList";
import ShowSelection from "../../../../components/ShowSelection";
import { productsByCategory } from "../../../../helpers/services";

//******** */

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/getdata");
  const data = await res.json();
  return data.products;
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
    (product) => product.product_id.toString() === id
  );
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return {
    props: {
      staticProduct: filterdProduct,
      staticProducts: filteredProducts,
      category: category,
    },
  };
}
//********** */

function ProductDetails({
  staticProduct,
  staticProducts,
  searchInputText,
  category,
  setSearchInputText,
}) {
  console.log("staticProducts222", staticProducts);
  console.log("staticProduct1111", staticProduct);
  const product = staticProduct[0];
  if (!product) {
    return <h2>Produkte werden geladen</h2>;
  }
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
  } = product;

  const images = [];
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter products by search input
  useEffect(() => {
    findProducts(searchInputText, staticProducts);
  }, [searchInputText]);

  function findProducts(searchInputText, products) {
    const searchInput = searchInputText.toLowerCase().trim();

    const filterProducts = products.filter((product) => {
      const maxLength = 60; // Set the maximum length for the hint text
      const name = product.product_name;
      const description1 = product.product_description1;
      const description2 = product.product_description2;

      const articleNumber = product.articles.find((article) =>
        article.article_number.startsWith(searchInput)
      );
      const productFullName = `${name} ${description1} ${description2}`
        .toLowerCase()
        .trim();

      return (
        (productFullName.length > maxLength
          ? productFullName.slice(0, maxLength) + "..."
          : productFullName
        ).includes(searchInput) || articleNumber
      );
    });

    //if search input is empty, set filteredProducts to empty string
    setFilteredProducts(
      searchInputText.length === 0 ? "" : filterProducts
    );
  }

  if (image1) {
    images.push({
      original: image1,
      thumbnail: image1,
      originalAlt: `Ein Bild von ${name}`,
    });
  }
  if (image2) {
    images.push({
      original: image2,
      thumbnail: image2,
      originalAlt: `Ein Bild von ${name}`,
    });
  }

  if (image3) {
    images.push({
      original: image3,
      thumbnail: image3,
      originalAlt: `Ein Bild von ${name}`,
    });
  }

  function selectedArticleSetter(articleId) {
    const articleObject = product.articles.find(
      (article) => article.article_id === articleId
    );
    setSelectedArticle(articleObject);
  }

  function selectedColorSetter(color) {
    setSelectedColor(color);
  }

  const searchProductsByCategory =
    searchInputText.length && filteredProducts
      ? productsByCategory(filteredProducts, category)
      : productsByCategory(staticProduct, category);

  return (
    <>
      {searchInputText.length ? (
        searchProductsByCategory.length ? (
          <ProductList
            products={searchProductsByCategory}
            setSearchInputText={setSearchInputText}
            category={"productDetails"}
          />
        ) : (
          <StyledParagraph>kein Produkt gefunden</StyledParagraph>
        )
      ) : (
        <>
          <StyledH1>{name}</StyledH1>
          <Descripton1>{description1}</Descripton1>
          <Wrapper>
            <ProductWrapper>
              <DescriptionWrapper>
                {description2 && <p>{description2}</p>}
                {description3 && <p>{description3}</p>}
                {description4 && <p>{description4}</p>}
              </DescriptionWrapper>

              {material && <p>Material: {material}</p>}
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
      )}
    </>
  );
}
//*************

export default ProductDetails;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const StyledH1 = styled.h1`
  text-align: start;
  font-size: 2rem;
  margin: 1rem 0;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  gap: 1.75rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageGalleryWrapper = styled.div`
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

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;
