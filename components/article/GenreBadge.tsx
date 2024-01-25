import clsx from "clsx";
import { FC } from "react";

type Props = {
  genre: "Web Design" | "Seo" | "Development" | string;
};

const GenreBadge: FC<Props> = ({ genre }) => {
  return (
    <div
      className={clsx("px-2 text-white rounded text-sm flex items-center", {
        "bg-blue-600": genre === "Web Design",
        "bg-green-800": genre === "Seo",
        "bg-teal-800": genre === "Development",
      })}
      id="genre-badge"
      itemProp="articleSection"
    >
      {genre}
    </div>
  );
};

export default GenreBadge;
