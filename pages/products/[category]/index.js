//products by category

import { useRouter } from "next/router";
import styled from "styled-components";

import ProductList from "../../../components/ProductList";
import { productsByCategory } from "../../../helpers/services";

function ProductCategory({ allProducts, searchInputText }) {
  const router = useRouter();
  const { category } = router.query;

  //
  const products = searchInputText ? searchInputText : allProducts;

  const searchInputTextByCategory = productsByCategory(products, category);

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
      {searchInputTextByCategory && (
        <ProductList
          products={searchInputTextByCategory}
          category={category}
        />
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
