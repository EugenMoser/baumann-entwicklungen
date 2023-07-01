//products details

import * as React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import strings from "../../../../helpers/strings";
import ColorButtons from "../../../../components/ColorButtons";
import Articles from "../../../../components/Articles";
import ShowSelection from "../../../../components/ShowSelection";

function ProductDetails({ products }) {
  const router = useRouter();
  const { id } = router.query;
  const product = productById(id);
  if (!product) return <h2>Produkte werden geladen</h2>;

  const selectFirstColor = product.colors[0];
  const [selectedArticle, setSelectedArticle] = useState();
  const [selectedColor, setselectedColor] = useState(selectFirstColor);
  const {
    product_name: name,
    product_description1: description1,
    product_description2: description2,
    product_material: material,
    product_imagepath_big1: image1,
    category: cat,
  } = product;
  function productById(id) {
    if (!products) {
      return console.log("products are not loaded");
    } else {
      const product = products.find(
        (product) => product.product_id.toString() === id
      );
      return product;
    }
  }

  function selectedArticleSetter(articleId) {
    const articleObject = product.articles.find(
      (article) => article.article_id.toString() === articleId
    );
    setSelectedArticle(articleObject);
  }

  function selectedColorSetter(color) {
    setselectedColor(color);
  }

  // console.log("pproducts at details", products);
  // console.log("product details", product);
  // console.log("product details color", product.colors[0]);
  // console.log("selectedColor ---", selectedColor);

  return (
    <>
      <section>
        <StyledH1>{name}</StyledH1>
        <p>{description1}</p>
        <ImageWrapper>
          <p>{description2}</p>
          <StyledImage
            src={image1}
            alt={`Ein Bild von ${name}`}
            width={459}
            height={204}
            sizes="60vw"
          />
        </ImageWrapper>
        <p>material:{material}</p>
        <p>category:{cat}</p>

        <legend>{strings.chooseColor}</legend>

        {product.colors && (
          <ColorButtons
            colors={product.colors}
            selectedColor={selectedColor}
            selectedColorSetter={selectedColorSetter}
            firstColor={product.colors[0].color_name}
          />
        )}
      </section>
      <section>
        {product.articles && (
          <Articles
            articles={product.articles}
            selectedArticleSetter={selectedArticleSetter}
          />
        )}
      </section>

      <StyledResultSection>
        <ShowSelection
          selectedArticle={selectedArticle}
          selectedColor={selectedColor}
          name={name}
        />
      </StyledResultSection>
    </>
  );
}
export default ProductDetails;

const StyledH1 = styled.h1`
  text-align: start;
  font-size: 2rem;
  margin: 1rem 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledImage = styled(Image)`
  align-self: center;
  max-width: 459px;
  min-width: 260px;
  max-height: 204px;
  min-height: 115px;

  width: 100%;
  height: auto;
  cursor: pointer;
`;

const StyledResultSection = styled.section`
  border: 1px solid red;
  background-color: #e2edd9;
`;
