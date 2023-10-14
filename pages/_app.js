import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import GlobalStyles from "../components/Style/GlobalStyles";
import findProductName from "../helpers/services";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  //search text input
  const [searchInputText, setSearchInputText] = useState("");
  console.log("searchInputText", searchInputText);

  //filtered products for search text input
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("filteredProducts", filteredProducts);

  const apiURL = `http://localhost:3000/api/getdata`;

  async function fetchAllProducts() {
    const response = await fetch(apiURL);
    const data = await response.json();
    setProducts(data.products);
  }

  function findProducts() {
    const filterProducts = products.filter((product) => {
      const maxLength = 60; // Set the maximum length for the hint text
      const name = product.product_name;
      const description1 = product.product_description1;
      const description2 = product.product_description2;

      const articleFullName = `${name} ${description1} ${description2}`
        .toLowerCase()
        .trim();

      return (
        articleFullName.length > maxLength
          ? articleFullName.slice(0, maxLength) + "..."
          : articleFullName
      ).includes(searchInputText.trim());
    });
    //if search input is empty, set filteredProducts to empty string
    setFilteredProducts(
      searchInputText.length === 0 ? "" : filterProducts
    );
  }

  useEffect(() => {
    try {
      fetchAllProducts();
    } catch (error) {
      console.error("Fehler beim Abruf der Produkte" + error.message);
    }
  }, []);

  useEffect(() => findProducts(), [searchInputText]);

  if (!products) return <h2>Seite wird geladen</h2>;

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          allProducts={products}
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputText}
          filteredProducts={filteredProducts}
        />
      </Layout>{" "}
    </>
  );
}

export default MyApp;
