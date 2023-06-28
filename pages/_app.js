import GlobalStyles from "../components/Style/GlobalStyles";
import Layout from "../components/Layout";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>{" "}
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
