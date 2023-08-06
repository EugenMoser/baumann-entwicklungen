import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

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
