// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { useVisit } from "../src/hooks/useVisit";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-slider/dist/styles.css";
import "../styles/main.css";

import { useRouter } from "next/router";
import { CloudinaryContext } from "cloudinary-react";
function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  useVisit("_app.tsx");
  return (
    <CloudinaryContext cloudName="ikeworks">
      <Component {...pageProps} key={asPath} />
    </CloudinaryContext>
  );
}

export default MyApp;
