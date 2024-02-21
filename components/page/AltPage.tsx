import { articles } from "@/data/articles";
import ProgressBar from "@badrap/bar-of-progress";
import dynamic from "next/dynamic";
import { Router } from "next/router";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

const AltHeader = dynamic(() => import("@/components/page/AltHeader"));
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

  const articlesGenre = articles.find((article) => article.genre);
  const articlesHeadline = articles.find((article) => article.headline);

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
      <AltHeader
        genre={articlesGenre?.genre}
        hasNav={true}
        headline={articlesHeadline?.headline}
        navIsOpen={navIsOpen}
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
