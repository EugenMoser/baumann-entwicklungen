//products details

import * as React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ColorButtons from "../../../../components/ColorButtons";
import Articles from "../../../../components/Articles";
import ShowSelection from "../../../../components/ShowSelection";

function ProductDetails({ products }) {
  const router = useRouter();
  const { id } = router.query;
  const product = productById(id);
  if (!products || !product) {
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

    product_material: material,
    product_imagepath_big1: image1,
  } = product;

  console.log(selectedArticle, "selectedArticle1.0");

  //filter products by id
  function productById(id) {
    const filteredProduct = products.find(
      (product) => product.product_id.toString() === id
    );
    return filteredProduct;
  }

  function selectedArticleSetter(articleId) {
    const articleObject = product.articles.find(
      // (article) => article.article_id.toString() === articleId
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
          {description2 && <p>{description2}</p>}
          {description3 && <p>{description3}</p>}

          <StyledParagraph>Material: {material}</StyledParagraph>
          <StyledImage
            src={image1}
            alt={`Ein Bild von ${name}`}
            width={459}
            height={204}
            sizes="60vw"
          />
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
            name={name}
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

const StyledImage = styled(Image)`
  align-self: center;
  max-width: 470px;
  /* min-width: 260px; */
  max-height: 204px;
  /* min-height: 115px; */

  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Descripton1 = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  /* margin-bottom: 1rem; */
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  gap: 1.75rem;
`;
