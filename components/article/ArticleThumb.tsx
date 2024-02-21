import DateFormatter from "../DateFormatter";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  thumbnail: string;
};

const ArticleThumb: FC<Props> = ({
  slug,
  headline,
  description,
  datePublished,
  thumbnail,
}) => {
  return (
    <article
      itemScope
      className={`  py-5 border-b`}
      itemProp="https://schema.org/Article"
    >
      <Link href={`/articles/${slug}`} title={headline}>
        <div
          className="flex flex-col-reverse sm:grid sm:grid-cols-12 sm:items-center"
          id="article-thumb"
        >
          <div className="sm:col-span-8" id="thumb-info">
            <div className="" id="thumb-header">
              <h3
                className={`${playfair.className} mb-2 text-3xl font-semibold `}
                id="thumb-title"
              >
                {headline}
              </h3>
            </div>
            <div className="mb-2 pr-2" id="thumb-description">
              <p className="">{description}</p>
            </div>
            <DateFormatter dateString={datePublished} />
          </div>
          <div className="mb-2 sm:mb-0 sm:col-span-4" id="thumb-image">
            <Image alt={headline} height={250} src={thumbnail} width={250} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleThumb;
