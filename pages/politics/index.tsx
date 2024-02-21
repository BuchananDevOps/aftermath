import ArticleThumb from "@/components/article/ArticleThumb";
import { articles } from "@/data/articles";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Template = dynamic(() => import("@/components/page/AltPage"));

const Page: NextPage = () => {
  const articlesInGenre = articles.filter(
    (article) => article.genre === "Politics"
  );

  if (articlesInGenre.length === 0) {
    return <div>No articles found in this genre</div>;
  }

  articlesInGenre.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <Template>
      <section className="max-w-3xl mx-auto px-6" id="politics">
        {articlesInGenre.map((item) => (
          <ArticleThumb
            key={item.slug}
            datePublished={item.datePublished}
            description={item.description}
            headline={item.headline}
            slug={item.slug}
            thumbnail={item.thumbnail}
          />
        ))}
      </section>
    </Template>
  );
};

export default Page;
