import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Product() {
  const router = useRouter();
  const { categroy, id } = router.query;
  console.log("id", id);
  const [product, setProduct] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata/${categroy}/${id}`;

  useEffect(() => {
    try {
      async function getDataById() {
        const response = await fetch(apiURL);
        console.log("response", response);
        const res = await response.json();
        console.log("response res" + res);
        setProduct(res.products[0]);
      }
      getDataById();
    } catch (error) {
      console.log("fehler bljad" + error.message);
    }
  }, []);

  console.log("product", product);

  return (
    <>
      <h2>test product {product.product_id}</h2>
      <p>id:{product.product_id}</p>
      <p>name:{product.product_name}</p>
    </>
  );
}
export default Product;
