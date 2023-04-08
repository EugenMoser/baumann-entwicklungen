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
      console.log("response list ", res);
      setProducts(res.products);
    }
    getProductsByCategory();
  }, []);
  console.log("produkt llist  ", products);

  return (
    <>
      <h1>hier kommen die Möbel Produkte</h1>
      <ProductList
        products={products}
        category={category}
      />
    </>
  );
}
export default Moebel;
