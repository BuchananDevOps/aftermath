import Heading from "./Heading";
import Hero from "./Hero";
import { FC } from "react";

type Props = {
  genre: string;
};

const Section: FC<Props> = ({ genre }) => {
  return (
    <section>
      <Heading genre={genre} />
      <Hero />
    </section>
  );
};

export default Section;
