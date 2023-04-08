import Product from "../Product";

function ProductList({ products, category }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.product_id}>
          <Product
            product={product}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
