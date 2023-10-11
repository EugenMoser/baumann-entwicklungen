//products details

import * as React from "react";
import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import Articles from "../../../../components/Articles";
import ColorButtons from "../../../../components/ColorButtons";
import ShowSelection from "../../../../components/ShowSelection";

//******** */

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/getdata");
  const data = await res.json();
  return data.products;
};

export async function getStaticPaths() {
  // const res = await fetch("http://localhost:3000/api/getdata");
  // const data = await res.json();
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
  // const category = context.params.category;
  // const res = await fetch(`http://localhost:3000/api/getdata`);
  // const data = await res.json();
  const products = await getProducts();
  const result = products.filter(
    (product) => product.product_id.toString() === id
  );
  return { props: { staticProduct: result } };
}
//********** */

function ProductDetails({ staticProduct }) {
  // const router = useRouter();
  // const { id } = router.query;
  // const product = productById(id);
  console.log("staticProducts", staticProduct);

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
    product_material: material,
    product_imagepath_big1: image1,
  } = product;

  //filter products by id
  // function productById(id) {
  //   const filteredProduct = products.find(
  //     (product) => product.product_id.toString() === id
  //   );
  //   return filteredProduct;
  // }

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

          <p>Material: {material}</p>
          <StyledImage
            src={image1 ? image1 : "/images/placeholder.jpg"}
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
          />
        </ArticleWrapper>
      </Wrapper>
    </>
  );
}
//*************
//*************
// export const getStaticPaths = async () => {
//   const paths = products.map((product) => ({
//     params: { id: product.product_id },
//   }));
//   return { paths, fallback: false };
// };
// export const getStaticProps = async () => {
//   const products = products;
//   return { props: { products } };
// };
//****** */

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

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  gap: 1.75rem;
`;
