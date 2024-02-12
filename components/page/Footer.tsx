import Logo from "./Logo";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx("", className)}>
      <div className=" mt-6 border-t border-slate-200 pt-10 pb-16 dark:border-slate-200/5">
        <FooterContent />
      </div>
    </footer>
  );
};

const FooterContent: FC = () => {
  return (
    <div className="max-w-container mx-auto flex flex-col text-center items-center">
      <Logo className="h-4 w-auto mx-auto" />
      <p className="mt-4 text-sm leading-6 text-slate-500">
        &copy; {new Date().getFullYear()} Aftermath News, Inc. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
