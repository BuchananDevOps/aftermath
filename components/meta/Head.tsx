import { articles } from "@/data/articles";
import organization from "@/data/organization.json";
import { gtagUrl, renderSnippet } from "@/lib/analytics";
import { useRouter } from "next/router";
import type { FC } from "react";

function getSchema() {
  const router = useRouter();
  const pathname = useRouter().pathname;
  const { slug } = router.query;
  const currentArticle = articles.find((article) => article.slug === slug);

  switch (pathname) {
    case "/":
      return { organization };
    case "/articles/[slug]":
      if (currentArticle) {
        return {
          "@context": "https://schema.org/Article",
          "@type": "Article",
          headline: currentArticle.headline,
          alternativeHeadline: currentArticle.alternateHeading,
          image: currentArticle.image,
          author: "John Buchanan",
          genre: currentArticle.genre,
          keywords: currentArticle.keywords,
          wordcount: currentArticle.wordCount,
          publisher: {
            "@type": "Organization",
            name: "Buchanan DevOps",
            logo: {
              "@type": "ImageObject",
              url: "https://buchanandevops.com/logo-black.svg",
            },
          },
          datePublished: currentArticle.datePublished, // Set dynamically
          description: currentArticle.description,
          articleBody: currentArticle.articleBody,
        };
      }
      return {};
    default:
      return {};
  }
}

const Head: FC = () => {
  const schema = getSchema();
  return (
    <>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script async src={gtagUrl} />
      <script dangerouslySetInnerHTML={{ __html: renderSnippet() as string }} />
    </>
  );
};

export default Head;
