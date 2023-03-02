import { globalStyles } from "./styles/global";
import "./styles/nativeCss.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
