//products by category

import { useRouter } from "next/router";
import styled from "styled-components";

import ProductList from "../../../components/ProductList";
import { sections } from "../../../helpers/constants";
import { productsByCategory } from "../../../helpers/services";

function ProductCategory({
  allProducts,
  filteredProducts,
  searchInputText,
}) {
  const router = useRouter();
  const { category } = router.query;

  const searchProductsByCategory =
    searchInputText.length && filteredProducts
      ? productsByCategory(filteredProducts, category)
      : productsByCategory(allProducts, category);

  return (
    <>
      {sections.map((section) => {
        category === section.label && <StyledH1>{section.name}</StyledH1>;
      })}

      {searchProductsByCategory.length ? (
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
