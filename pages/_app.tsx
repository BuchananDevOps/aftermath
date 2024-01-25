import "../css/fonts.css";
import "../css/main.css";
import Head from "@/components/meta/Head";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
