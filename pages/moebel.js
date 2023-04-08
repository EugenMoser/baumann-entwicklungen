import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

function Moebel() {
  const [products, setProducts] = useState([]);
  const category = "moebel";

  const apiURL = `http://localhost:3000/api/getdata/${category}`;

  useEffect(() => {
    async function getProductsByCategory() {
      const response = await fetch(apiURL);
      const res = await response.json();
      setProducts(res.products);
    }
    getProductsByCategory();
  }, []);

  return (
    <>
      <h1>Möbelbereich</h1>
      <ProductList
        products={products}
        category={category}
      />
    </>
  );
}
export default Moebel;
