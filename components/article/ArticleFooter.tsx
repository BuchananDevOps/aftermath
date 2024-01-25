import DateFormatter from "../DateFormatter";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

type Props = {
  mentions?: {
    name: string;
    link: string;
  }[];
  citation?: {
    familyName?: string;
    givenName?: string;
    sourceTitle: string;
    containerTitle: string;
    publisher?: string;
    datePublished: string;
    url: string;
    link?: string;
    doi?: string;
  }[];
  keywords?: string[];
  className?: string;
};

const ArticleFooter: FC<Props> = ({
  mentions,
  citation,
  keywords,
  className,
}) => {
  return (
    <div className={`${className} text-black`} id="article_footer">
      <div className="" id="article_footer_keywords">
        {keywords && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Tags:
          </h6>
        )}
        {keywords && (
          <div className="flex flex-wrap">
            {keywords.map((item) => (
              <span
                key={item}
                className="p-1 mt-1 text-white text-sm bg-sky-600 rounded-sm mr-1"
                itemProp="keywords"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
      <div id="article_footer_mentions">
        {mentions && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Mentions:
          </h6>
        )}
        {mentions &&
          mentions.map((item) => (
            <Link
              key={item.name}
              className="pr-1 mr-1 text-blue-600 border-r"
              href={item.link}
              itemProp="mention"
              target="_blank"
              title={item.name}
            >
              {item.name}
            </Link>
          ))}
      </div>
      <div className="" id="article_footer_citations">
        {citation && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Citations:
          </h6>
        )}
        {citation &&
          citation.map((item) => (
            <div
              key={item.containerTitle}
              className="flex flex-wrap text-xs border-b my-2"
              id="citation"
              itemProp="citation"
            >
              {item.familyName && item.givenName && (
                <cite className="" id="name">
                  {item.familyName}, {item.givenName}.
                </cite>
              )}
              <Link
                className=" text-blue-600"
                href={item.url}
                target="_blank"
                title={item.sourceTitle}
              >
                <cite className="flex flex-row items-center" id="source_title">
                  &nbsp;&quot;{item.sourceTitle}{" "}
                  <ArrowTopRightOnSquareIcon className=" font-light w-4 h-4 ml-1" />
                  &quot;.
                </cite>
              </Link>
              {item.containerTitle && (
                <cite
                  className="citation citation-container-title"
                  id="container_title"
                >
                  &nbsp;{item.containerTitle},
                </cite>
              )}
              {item.datePublished && (
                <time id="date">
                  &nbsp; <DateFormatter dateString={item.datePublished} />,
                </time>
              )}
              {item.url && (
                <cite
                  className="citation citation-location"
                  id="location"
                  title={item.link}
                >
                  &nbsp;{item.link}.
                </cite>
              )}
              {item.doi && <cite id="doi">&nbsp;{item.doi},</cite>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ArticleFooter;
