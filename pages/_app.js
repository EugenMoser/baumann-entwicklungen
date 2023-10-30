import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import GlobalStyles from "../components/Style/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  //search text input
  const [searchInputText, setSearchInputText] = useState("");

  //filtered products for search text input
  const [filteredProducts, setFilteredProducts] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata`;

  useEffect(() => {
    try {
      fetchAllProducts();
    } catch (error) {
      console.error("Fehler beim Abruf der Produkte" + error.message);
    }
  }, []);

  useEffect(() => {
    findProducts(searchInputText, products);
  }, [searchInputText]);

  async function fetchAllProducts() {
    const response = await fetch(apiURL);
    const data = await response.json();
    setProducts(data.products);
  }

  function findProducts(searchInputText, products) {
    const searchInput = searchInputText.toLowerCase().trim();

    const filterProducts = products.filter((product) => {
      const maxLength = 60; // Set the maximum length for the hint text
      const name = product.product_name;
      const description1 = product.product_description1;
      const description2 = product.product_description2;

      const articleNumber = product.articles.find((article) =>
        article.article_number.startsWith(searchInput)
      );
      console.log("articleNumber.", articleNumber, product);
      const productFullName = `${name} ${description1} ${description2}`
        .toLowerCase()
        .trim();
      console.log(
        "productFullName",
        (productFullName.length > maxLength
          ? productFullName.slice(0, maxLength) + "..."
          : productFullName
        ).includes(searchInput)
      );
      return (
        (productFullName.length > maxLength
          ? productFullName.slice(0, maxLength) + "..."
          : productFullName
        ).includes(searchInput) || articleNumber
      );
    });

    console.log(filterProducts, "filterProducts !!!!!");
    //if search input is empty, set filteredProducts to empty string
    setFilteredProducts(
      searchInputText.length === 0 ? "" : filterProducts
    );
  }

  function setSearchInputTextHandler(value) {
    setSearchInputText(value);
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          allProducts={products}
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputTextHandler}
          filteredProducts={filteredProducts}
        />
      </Layout>{" "}
    </>
  );
}

export default MyApp;
