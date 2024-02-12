import DateFormatter from "../DateFormatter";
import GenreBadge from "./GenreBadge";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  genre: string;
  thumbnail: string;
};

const ArticleThumb: FC<Props> = ({
  slug,
  headline,
  description,
  datePublished,
  genre,
  thumbnail,
}) => {
  return (
    <Link href={slug} title={headline}>
      <div className="" id="article-thumb">
        <div className="" id="thumb-image">
          <Image alt={headline} height={250} src={thumbnail} width={250} />
        </div>
        <div className="" id="thumb-info">
          <div className="" id="thumb-header">
            <h3 className="" id="thumb-title">
              {headline}
            </h3>
            <DateFormatter dateString={datePublished} />
            <GenreBadge genre={genre} />
          </div>
          <div className="" id="thumb-description">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleThumb;
