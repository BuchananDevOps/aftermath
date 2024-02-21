import ArticleBody from "@/components/article/ArticleBody";
import ArticleFooter from "@/components/article/ArticleFooter";
import ArticleHeader from "@/components/article/ArticleHeader";
import { articles } from "@/data/articles";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC } from "react";

const AltPage = dynamic(() => import("@/components/page/AltPage"));

const Article: FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const currentArticle = articles.find((article) => article.slug === slug);

  if (!currentArticle) {
    return <div>Article not found</div>;
  }

  return (
    <AltPage>
      <article
        itemScope
        className=""
        id="article"
        itemProp="https://schema.org/Article"
      >
        <ArticleHeader
          datePublished={currentArticle.datePublished}
          headline={currentArticle.headline}
        />
        <ArticleBody
          articleBody={currentArticle.articleBody}
          backstory={currentArticle.backstory}
        />
        <ArticleFooter
          citation={currentArticle.citation}
          keywords={currentArticle.keywords}
          mentions={currentArticle.mentions}
        />
      </article>
    </AltPage>
  );
};

export default Article;
