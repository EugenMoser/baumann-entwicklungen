import * as React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import strings from "../../../../helpers/strings";
import ColorButtons from "../../../../components/ColorButtons";
import Article from "../../../../components/Article";

function ProductDetails() {
  const router = useRouter();
  const { category, id } = router.query;
  const [product, setProduct] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata/${category}/${id}`;

  useEffect(() => {
    try {
      function getDataById() {
        fetch(apiURL)
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);
            setProduct(data.products[0]);
          });
      }
      getDataById();
    } catch (error) {
      console.error("Fehler Produkt" + error.message);
    }
  }, [apiURL]);

  if (!product) return <h2>Produkte werden geladen</h2>;

  const {
    product_id: Id,
    product_name: name,
    product_description1: description1,
    product_description2: description2,
    product_description3: description3,
    product_material: material,
    product_imagepath_big1: image1,
    Product_image_alt: imageAlt,
    category: cat,
  } = product;

  console.log(product);

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

        {product.colors && <ColorButtons colors={product.colors} />}
      </section>
      <section>
        {product.articles &&
          product.articles.map((article) => <Article article={article} />)}
      </section>
      {/* <section>
        <InputLabel id="article-label">
          {strings.articleVariant}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {product.articles &&
            product.articles.map((article) => (
              <Article article={article} />
            ))}
        </Select>
      </section> */}
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
