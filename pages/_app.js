import { Layout } from "../components/Layout";
import "../styles/globals.css";
import { Theme, ThemeWrapper } from "../context/themeContext";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeWrapper>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
    </ThemeWrapper>
  );
}

export default MyApp;
