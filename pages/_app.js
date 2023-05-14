import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  console.log("test");
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
