import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";

function Halterung() {
  const [products, setProducts] = useState([]);
  const category = "halterung";

  const apiURL = `http://localhost:3000/api/getdata/${category}`;

  useEffect(() => {
    function getProductsByCategory() {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => setProducts(data.products));
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
export default Halterung;
