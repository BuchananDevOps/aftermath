import "../css/fonts.css";
import "../css/main.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { FC } from "react";

const Head = dynamic(() => import("@/components/meta/Head"));
const Page = dynamic(() => import("@/components/page/Page"));

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
