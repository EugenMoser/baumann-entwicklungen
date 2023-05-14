import { useState, useEffect } from "react";
import ProductList from "../../../components/ProductList";
import { useRouter } from "next/router";
import styled from "styled-components";

function Category() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  console.log("router", router);

  console.log("category000", category);

  const apiURL = `http://localhost:3000/api/getdata/${category}`;

  useEffect(() => {
    function getProductsByCategory() {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => setProducts(data.products));
    }
    getProductsByCategory();
  }, [category]);

  console.log("products", products);

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
      <ProductList
        products={products}
        category={category}
      />
    </>
  );
}
export default Category;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;
