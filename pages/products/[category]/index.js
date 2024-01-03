//products by category

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import styled from "styled-components";

import ProductList from "../../../components/ProductList";

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
    return { params: { category: product.category } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const category = context.params.category;
  // const res = await fetch(`http://localhost:3000/api/getdata`);
  // const data = await res.json();
  const products = await getProducts();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return { props: { staticProducts: filteredProducts } };
}

//********** */

function ProductCategory({ staticProducts }) {
  // const router = useRouter();
  // const { category } = router.query;

  const category = staticProducts[0].category;
  // const filteredProducts = productsByCategory(products.category);

  // //filter products by category
  // function productsByCategory(category) {
  //   const filteredProduct = products.filter(
  //     (product) => product.category === category
  //   );
  //   return filteredProduct;
  // }
  return (
    <>
      {category === "moebel" ? (
        <StyledH1>Möbelbereich</StyledH1>
      ) : category === "halterung" ? (
        <StyledH1>Halterungen</StyledH1>
      ) : category === "wasser" ? (
        <StyledH1>Wasserbereich</StyledH1>
      ) : category === "lueftung" ? (
        <StyledH1>Lüftungsbereich</StyledH1>
      ) : category === "elektro" ? (
        <StyledH1>Elektrobereich</StyledH1>
      ) : (
        <StyledH1>Keine Kategorie</StyledH1>
      )}

      {staticProducts ? (
        <ProductList
          // products={searchInputTextByCategory}
          products={staticProducts}
          category={category}
        />
      ) : (
        <StyledParagraph>kein Produkt gefunden</StyledParagraph>
      )}
    </>
  );
}
export default ProductCategory;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;
const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;
