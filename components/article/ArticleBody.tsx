import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { FC } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

type Props = {
  articleBody: {
    articleSection?: string;
    paragraph: string;
    image?: string;
    alt?: string;
    component?: React.ReactNode;
  }[];
  backstory: string;
};

const ArticleBody: FC<Props> = ({ articleBody, backstory }) => {
  return (
    <>
      <div className="" id="article_backstory">
        {backstory && (
          <div className="max-w-3xl mx-auto px-5">
            <p className="my-4 text-black" id="article_backstory_paragraph">
              {backstory}
            </p>
          </div>
        )}
      </div>
      <div className="" id="article_body" itemProp="articleBody">
        {articleBody.map((paragraph) => (
          <>
            {paragraph.image && (
              <figure
                className="mx-auto my-14 lg:w-2/3 h-auto"
                id="article_image_container"
              >
                <Image
                  alt={paragraph.alt || "Supporting Image for Article"}
                  height={800}
                  id="article_body_image"
                  src={paragraph.image}
                  width={1200}
                />
                <figcaption
                  className={` ${playfair.className} text-gray-500 text-center mt-2`}
                >
                  <span className=""> {paragraph.alt}</span>
                </figcaption>
              </figure>
            )}
            <div className=" max-w-3xl mx-auto px-5">
              {paragraph.articleSection && (
                <h2
                  className={` ${playfair.className} text-center text-3xl font-extrabold tracking-tight text-slate-900 mt-4`}
                  id="article_body_section_title"
                >
                  {paragraph.articleSection}
                </h2>
              )}
              <p className="my-4 text-black w-full" id="article_body_paragraph">
                {paragraph.paragraph}
              </p>
              {paragraph.component && (
                <div className="" id="article_body_component">
                  {paragraph.component}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ArticleBody;
