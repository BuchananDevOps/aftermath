import { NextPage } from "next";
import dynamic from "next/dynamic";

const Template = dynamic(() => import("@/components/page/Page"));

const Page: NextPage = () => {
  return (
    <Template>
      <h1>Interesting Aftermath</h1>;
    </Template>
  );
};

export default Page;
