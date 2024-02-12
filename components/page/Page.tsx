import ProgressBar from "@badrap/bar-of-progress";
import dynamic from "next/dynamic";
import { Router } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";

const Header = dynamic(() => import("@/components/page/Header"));
const Footer = dynamic(() => import("@/components/page/Footer"));

const progress = new ProgressBar({
  size: 2,
  color: "#38bdf8",
  className: "bar-of-progress",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

const Page: FC<PropsWithChildren> = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (!navIsOpen) return;
    function handleRouteChange() {
      setNavIsOpen(false);
    }
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [navIsOpen]);

  return (
    <>
      <Header
        hasNav={true}
        navIsOpen={navIsOpen}
        title={"Header"}
        onNavToggle={(isOpen: boolean | ((prevState: boolean) => boolean)) =>
          setNavIsOpen(isOpen)
        }
      />
      {children}
      <Footer />
    </>
  );
};

export default Page;
