import Link from "next/link";

function Product({ product, category }) {
  return (
    <>
      <p>Id: {product.product_id}</p>
      <p>Name: {product.product_name}</p>
      <p>Beschreibung: {product.product_description1}</p>

      <Link href={`./products/${category}/${product.product_id}`}>
        I am a link
      </Link>
      <hr />
    </>
  );
}

export default Product;
