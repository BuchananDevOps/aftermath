import DateFormatter from "../DateFormatter";
import GenreBadge from "./GenreBadge";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Playfair_Display } from "next/font/google";
import { FC } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {
  headline: string;
  datePublished: string;
  timeRequired: string;
  genre: any;
};

const ArticleHeader: FC<Props> = ({
  headline,
  datePublished,
  timeRequired,
  genre,
}) => {
  return (
    <div className="text-black" id="article_heading">
      <h1
        className={`col-start-1 row-start-2 mt-4  text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl ${playfair.className}`}
        id="article_heading_headline"
      >
        {headline}
      </h1>
      <div
        className="flex flex-col md:flex-row md:items-center"
        id="article_heading_info"
      >
        <div className="flex flex-wrap md:flex-row mt-4" id="">
          <div className="flex flex-row mx-2 my-2" id="article_heading_date">
            <CalendarDaysIcon className="h-6 w-6 mr-1" />
            <time>
              <DateFormatter dateString={datePublished} />
            </time>
          </div>
          <div className="flex flex-row mx-2 my-2" id="article_heading_time">
            <ClockIcon className="h-6 w-6 mr-1" />
            <span>{timeRequired}</span>
          </div>
          <div className="flex flex-row mx-2 my-2" id="article_heading_genre">
            <GenreBadge genre={genre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
