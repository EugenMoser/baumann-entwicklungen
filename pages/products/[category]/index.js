//products by category

import { useEffect, useState } from "react";

import styled from "styled-components";

import ProductList from "../../../components/ProductList";
import { productsByCategory } from "../../../helpers/services";

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

function ProductCategory({ staticProducts, searchInputText }) {
  const category = staticProducts[0].category;
  const [filteredProducts, setFilteredProducts] = useState([]);

  //for static site generation (for dynamic site function is in _app.js )
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

  useEffect(() => {
    findProducts(searchInputText, staticProducts);
  }, [searchInputText]);

  const searchProductsByCategory =
    searchInputText.length && filteredProducts
      ? productsByCategory(filteredProducts, category)
      : productsByCategory(staticProducts, category);

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
          products={searchProductsByCategory}
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
