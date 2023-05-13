import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";
import { useRouter } from "next/router";

function Category() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  const apiURL = `http://localhost:3000/api/getdata/${category}`;

  useEffect(() => {
    function getProductsByCategory() {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => setProducts(data.products));
    }
    getProductsByCategory();
  }, [category]);

  console.log("products", products);

  return (
    <>
      {category === "moebel" ? (
        <h1>Möbelbereich</h1>
      ) : category === "halterung" ? (
        <h1>Halterungen</h1>
      ) : category === "wasser" ? (
        <h1>Wasserbereich</h1>
      ) : category === "lueftung" ? (
        <h1>Lüftungsbereich</h1>
      ) : category === "elektro" ? (
        <h1>Elektrobereich</h1>
      ) : (
        <h1>Keine Kategorie</h1>
      )}
      <ProductList
        products={products}
        category={category}
      />
    </>
  );
}
export default Category;
