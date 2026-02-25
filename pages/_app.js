import { useState } from "react";

import Layout from "../components/Layout";
import GlobalStyles from "../components/Style/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [searchInputText, setSearchInputText] = useState("");

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputText}
        />
      </Layout>
    </>
  );
}

export default MyApp;
