import clsx from "clsx";
import { FC } from "react";

type Props = {
  genre: "National" | "World" | "Politics" | "True Crime" | string;
};

const GenreBadge: FC<Props> = ({ genre }) => {
  return (
    <div
      className={clsx("px-2 text-white rounded text-sm flex items-center", {
        "bg-green-800": genre === "National",
        "bg-teal-800": genre === "World",
        "bg-yellow-800": genre === "Politics",
        "bg-red-600": genre === "True Crime",
      })}
      id="genre-badge"
      itemProp="articleSection"
    >
      {genre}
    </div>
  );
};

export default GenreBadge;
