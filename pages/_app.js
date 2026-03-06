import { useState } from "react";

import localFont from "@next/font/local";

import Layout from "../components/Layout";
import GlobalStyles from "../components/Style/GlobalStyles";

export const rubik = localFont({
  src: "../public//fonts/Rubik-VariableFont_wght.woff2",
  display: "swap",
  preload: true,
  // Erstellt automatisch eine Fallback-Schrift mit angepassten Metriken,
  // damit beim Font-Swap kein Layout-Shift (CLS) entsteht.
  adjustFontFallback: true,
});

function MyApp({ Component, pageProps }) {
  const [searchInputText, setSearchInputText] = useState("");

  return (
    <>
      <GlobalStyles />
      <Layout className={rubik.className}>
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
