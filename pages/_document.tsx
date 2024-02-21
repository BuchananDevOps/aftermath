import { gtagUrl, renderSnippet } from "@/lib/analytics";
import clsx from "clsx";
import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className=" [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
      >
        <Head>
          <Script async src={gtagUrl} />
          <Script
            dangerouslySetInnerHTML={{ __html: renderSnippet() as string }}
          />
          <meta
            name="google-adsense-account"
            content="ca-pub-7047434964992934"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    );
  }
}
