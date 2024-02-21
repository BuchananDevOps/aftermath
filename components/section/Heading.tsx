import { FC } from "react";

type Props = {
  genre: string;
};

const Heading: FC<Props> = ({ genre }) => {
  return (
    <header className="" id="">
      <div className="" id="sponsor" />
      <div className="" id="heading">
        <h1 className="" id="section-heading">
          {genre}
        </h1>
      </div>
    </header>
  );
};

export default Heading;
