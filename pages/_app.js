import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const apiURL = `http://localhost:3000/api/getdata`;

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
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <GlobalStyles />
          <Layout>
            <Component
              {...pageProps}
              products={products}
            />
          </Layout>{" "}
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
