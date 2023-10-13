import Product from "../Product";
import styled from "styled-components";

function ProductList({ products, category }) {
  return (
    <ul>
      {products.map((product) => (
        <StyledListItem key={product.product_id}>
          <Product
            product={product}
            category={category}
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
