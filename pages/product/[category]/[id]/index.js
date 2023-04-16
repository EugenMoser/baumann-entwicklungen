import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Product() {
  const router = useRouter();
  const { category, id } = router.query;

  const [product, setProduct] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata/${category}/${id}`;

  useEffect(() => {
    try {
      async function getDataById() {
        const response = await fetch(apiURL);
        console.log("response", response);
        const res = await response.json();
        console.log("res", res);
        setProduct(res.products);
      }
      getDataById();
    } catch (error) {
      console.log("Fehler Produkt" + error.message);
    }
  }, []);

  console.log("product", product);
  // const {
  //   product_id: Id,
  //   product_name: name,
  //   product_description1: description1,
  //   product_description2: description2,
  //   product_description3: description3,
  //   product_material: material,
  //   product_imagepath: image,
  //   category: cat,
  // } = product;
  return (
    <>
      <h2>test product {id}</h2>
      {/* <p>name:{name}</p>
      <p>category:{cat}</p>
      <p>material:{material}</p>
      <p>description1:{description1}</p>
      <p>description2:{description2}</p>
      <p>description3:{description3}</p>
      <img
        src={image}
        alt=""
      /> */}
    </>
  );
}
export default Product;
