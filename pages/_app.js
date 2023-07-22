import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const apiURL = `http://localhost:3000/api/getdata`;

  async function fetchAllProducts() {
    const response = await fetch(apiURL);
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    try {
      fetchAllProducts();
    } catch (error) {
      console.error("Fehler Produkt" + error.message);
    }
  }, []);
  if (!products) return <h2>Seite wird geladen</h2>;

  console.log("all products", products);

  return (
    <>
      {/* <StyledEngineProvider injectFirst>
        <CssVarsProvider> */}
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          products={products}
        />
      </Layout>{" "}
      {/* </CssVarsProvider>
      </StyledEngineProvider> */}
    </>
  );
}

export default MyApp;
