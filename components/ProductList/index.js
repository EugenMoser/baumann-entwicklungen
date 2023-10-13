import styled from "styled-components";

import Product from "../Product";

function ProductList(props) {
  const products = props.products;
  const category = props?.category;
  const hrefProduct = props.hrefProduct ? props.hrefProduct : "";
  return (
    <ul>
      {products.map((product, index) => (
        <StyledListItem key={product.product_id + index}>
          <Product
            product={product}
            category={category || product.category}
            hrefProduct={hrefProduct}
          />
        </StyledListItem>
      ))}
    </ul>
  );
}

export default ProductList;

const StyledListItem = styled.li`
  width: 100%;
  height: 100px;
  background-color: var(--background-category-color);
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--background-category-hover-color);
  }
`;
