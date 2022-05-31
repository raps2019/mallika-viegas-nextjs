import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
ThemeProvider;

function MyApp({ Component, pageProps }) {

  const theme = 
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
