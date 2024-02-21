import DateFormatter from "../DateFormatter";
import { Playfair_Display } from "next/font/google";
import { FC } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {
  headline: string;
  datePublished: string;
};

const ArticleHeader: FC<Props> = ({ headline, datePublished }) => {
  return (
    <div
      className="text-black text-center max-w-5xl mx-auto px-5"
      id="article_heading"
    >
      <h1
        className={`col-start-1 row-start-2 mt-4  text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl ${playfair.className}`}
        id="article_heading_headline"
      >
        {headline}
      </h1>
      <div
        className="flex flex-col justify-center md:flex-row md:items-center"
        id="article_heading_info"
      >
        <div className="flex flex-wrap md:flex-row mt-2" id="">
          <div className="flex flex-row mx-2 my-1" id="article_heading_date">
            <time>
              <DateFormatter dateString={datePublished} />
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
