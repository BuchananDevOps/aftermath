import Image from "next/image";
import React, { FC } from "react";

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
          <>
            <h2
              className=" text-3xl font-extrabold tracking-tight text-slate-900 mt-4"
              id="article_backstory_section_title"
              itemProp="backstory"
            >
              Backstory
            </h2>
            <p className="my-4 text-black" id="article_backstory_paragraph">
              {backstory}
            </p>
          </>
        )}
      </div>
      <div className="" id="article_body" itemProp="articleBody">
        {articleBody.map((paragraph) => (
          <>
            {paragraph.image && (
              <Image
                alt={paragraph.alt || "Supporting Image for Article"}
                className=""
                height={400}
                id="article_body_image"
                itemProp="image"
                src={paragraph.image}
                width={600}
              />
            )}
            {paragraph.articleSection && (
              <h2
                className=" text-3xl font-extrabold tracking-tight text-slate-900 mt-4"
                id="article_body_section_title"
              >
                {paragraph.articleSection}
              </h2>
            )}
            <p className="my-4 text-black" id="article_body_paragraph">
              {paragraph.paragraph}
            </p>
            {paragraph.component && (
              <div className="" id="article_body_component">
                {paragraph.component}
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default ArticleBody;
