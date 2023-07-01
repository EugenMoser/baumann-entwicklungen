//products by category

import ProductList from "../../../components/ProductList";
import { useRouter } from "next/router";
import styled from "styled-components";

function ProductCategory({ products }) {
  const router = useRouter();
  const { category } = router.query;

  const filteredProducts = productsByCategory(category);

  //filter products by category
  function productsByCategory(category) {
    const filteredProduct = products.filter(
      (product) => product.category === category
    );
    return filteredProduct;
  }
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
      {filteredProducts && (
        <ProductList
          products={filteredProducts}
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
