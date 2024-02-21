import AltNav from "./AltNav";
import Logo from "./Logo";
import clsx from "clsx";
import Link from "next/link";
import Router from "next/router";
import { FC, useEffect, useState } from "react";

type HeaderProps = {
  hasNav: boolean;
  navIsOpen: any;
  onNavToggle: any;
  headline: any;
  genre: any;
};

const AltHeader: FC<HeaderProps> = ({ hasNav, genre, headline }) => {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const offset = 50;
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isOpaque]);

  return (
    <>
      <div className="absolute z-20 top-0 inset-x-0 overflow-hidden pointer-events-none" />
      <div
        className={clsx(
          "sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]",
          isOpaque
            ? "bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
            : "bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
        )}
      >
        <div
          className={clsx(
            "py-4 px-4 sm:px-6 lg:px-8",
            hasNav ? "mx-4 lg:mx-0" : "px-4"
          )}
        >
          <div className="relative w-full flex justify-between items-center">
            <div className="flex ">
              <AltNav />
            </div>
            <div
              className={clsx("flex items-center", isOpaque ? "hidden" : "")}
            >
              <Link
                className="mr-3 flex-none overflow-hidden"
                href="/"
                onContextMenu={(e) => {
                  e.preventDefault();
                  Router.push("/");
                }}
              >
                <span className="sr-only">Buchanan DevOps Home Page</span>
                <Logo className="w-auto h-5" />
              </Link>
            </div>
            <div
              className={clsx("", isOpaque ? "" : "hidden")}
              id="genre-title"
            >
              <div className="">
                <Link
                  href={`/${genre.toLocaleLowerCase()}`}
                  title={`${genre} News`}
                >
                  <span className="font-semibold">{genre} &nbsp;</span>
                </Link>
                |<span className="">&nbsp;{headline}</span>
              </div>
            </div>
            <div className="flex items-center ">
              <Link
                className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                href="https://twitter.com/AftermathNews"
                target="_blank"
              >
                <span className="sr-only">Aftermath News Twitter</span>
                <svg height="24" viewBox="0 0 24 24" width="24">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AltHeader;
