import styled from "styled-components";

import Product from "../Product";

function ProductList(props) {
  //for dynamic website
  // const products = props.products;

  //for static website
  const products = props.products;

  const category = props?.category;

  const hrefProduct = props.hrefProduct ? props.hrefProduct : "";
  //sort the products by column prio
  const sortedProducts = products.sort((a, b) => a.prio - b.prio);

  return (
    <ul>
      {sortedProducts.map((product, index) => (
        <StyledListItem key={product.product_id}>
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
