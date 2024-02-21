import "../css/fonts.css";
import "../css/main.css";
import { useAnalytics } from "@/lib/analytics";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { FC } from "react";

const Head = dynamic(() => import("@/components/meta/Head"));

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useAnalytics();
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
