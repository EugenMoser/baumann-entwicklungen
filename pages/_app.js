import { useEffect, useState } from "react";

import { CssVarsProvider, StyledEngineProvider } from "@mui/joy/styles";

import Layout from "../components/Layout";
import GlobalStyles from "../components/Style/GlobalStyles";
import findProductName from "../helpers/services";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          // products={products}
        />
      </Layout>{" "}
    </>
  );
}

export default MyApp;
