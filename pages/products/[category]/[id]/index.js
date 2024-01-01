//products details

import "react-image-gallery/styles/css/image-gallery.css";

import * as React from "react";
import { useState } from "react";

import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

import Articles from "../../../../components/Articles";
import ColorButtons from "../../../../components/ColorButtons";
import ShowSelection from "../../../../components/ShowSelection";

function ProductDetails({ allProducts, searchInputText }) {
  const router = useRouter();
  const { id } = router.query;
  const product = productById(id);
  if (!allProducts || !product) {
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

  //filter products by id
  function productById(id) {
    const filteredProduct = allProducts.find(
      (product) => product.product_id.toString() === id
    );
    return filteredProduct;
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

  return (
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

          <p>Material: {material}</p>
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
