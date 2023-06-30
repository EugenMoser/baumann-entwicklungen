//products details

import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import strings from "../../../../helpers/strings";
import ColorButtons from "../../../../components/ColorButtons";
import Articles from "../../../../components/Articles";

function ProductDetails({ products }) {
  const router = useRouter();
  const { id } = router.query;

  function productById(id) {
    console.log("products at function ", products);

    return products.find(
      (product) => product.product_id.toString() === id
    );
  }
  const product = productById(id);

  const {
    product_name: name,
    product_description1: description1,
    product_description2: description2,
    product_description3: description3,
    product_material: material,
    product_imagepath_big1: image1,
    Product_image_alt: imageAlt,
    category: cat,
  } = product;

  const [selectedArticle, setSelectedArticle] = useState("");

  function selectedArticleSetter(value) {
    setSelectedArticle(value);
  }

  const [selectedColor, setselectedColor] = useState(
    product.colors && product.colors[0]
  );

  function selectedColorSetter(color) {
    setselectedColor(color);
  }

  if (!product) return <h2>Produkte werden geladen</h2>;

  // console.log("pproducts at details", products);
  // console.log("product details", product);
  // console.log("product details color", product.colors[0]);
  // console.log("selectedArticle", selectedArticle);
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
            alt={`Ein Bild von ${imageAlt}`}
            width={459}
            height={204}
            sizes="60vw"
          />
        </ImageWrapper>
        <p>material:{material}</p>
        <p>category:{cat}</p>
        <p>description3:{description3}</p>

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
      <section>
        <h2>Ergebnis</h2>
        <p>
          Artikelnummer: {selectedArticle} - {selectedColor.suffix}
        </p>
      </section>
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
