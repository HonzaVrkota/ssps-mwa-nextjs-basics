import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return <Layout>{page}</Layout>;
    });

  return getLayout(<Component {...pageProps} />);
}
