import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
