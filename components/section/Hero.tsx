import DateFormatter from "../DateFormatter";
import { articles } from "@/data/articles";
import { Playfair_Display, Roboto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Serif({ subsets: ["latin"] });

const Hero: FC = () => {
  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const heroArticle = sortedArticles[0];

  const sideArticles = sortedArticles.slice(1, 5);
  return (
    <section className="bg-white pt-10" id="hero">
      <div
        className=" max-w-7xl mx-auto md:grid md:grid-cols-12"
        id="hero_container"
      >
        <div
          className="border-b md:col-span-7 md:border-b-0 md:border-r md:pr-3 lg:col-span-9 lg:pr-6 mb-4"
          id="hero_featured"
        >
          <Link
            className=""
            href={`${heroArticle.slug}`}
            title={heroArticle.headline}
          >
            <article
              className="flex flex-col justify-center items-center"
              id="featured"
            >
              <Image
                alt={heroArticle.headline}
                className="w-full mb-6"
                height={400}
                src={heroArticle.image}
                width={600}
              />
              <div
                className="w-full text-left lg:w-2/3 lg:text-center"
                id="featured_info"
              >
                <h2
                  className={`${playfair.className} text-2xl font-bold mb-2 hover:underline`}
                  id="featured_headline"
                >
                  {heroArticle.headline}
                </h2>
                <p
                  className={`${roboto.className} mb-1 text-sm`}
                  id="featured_description"
                >
                  {heroArticle.description}
                </p>
                <div className="text-sm mb-4" id="featured_date">
                  <DateFormatter dateString={heroArticle.datePublished} />
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div
          className="md:col-span-5 md:pl-3 lg:col-span-3 lg:pl-6 "
          id="hero_sidebar"
        >
          {sideArticles.map((item) => (
            <Link key={item.slug} href={`${item.slug}`} title={item.headline}>
              <article className=" border-b mb-4" id="sidebar">
                <div
                  className=" flex flex-col-reverse md:flex-row md:justify-between mb-2"
                  id="sidebar_top"
                >
                  <h2
                    className={`${playfair.className}  text-2xl font-bold hover:underline`}
                    id="sidebar_headline"
                  >
                    {item.headline}
                  </h2>
                  <Image
                    alt={item.headline}
                    className="w-full h-auto mb-6 md:w-[100px] md:h-[66px] md:mb-0 lg:pl-2"
                    height={500}
                    src={item.image}
                    width={600}
                  />
                </div>
                <div className="flex flex-col" id="sidebar_bottom">
                  <p
                    className={`${roboto.className}  text-sm`}
                    id="sidebar_description"
                  >
                    {item.description}
                  </p>
                  <div className=" text-sm mb-4" id="sidebar_date">
                    <DateFormatter dateString={item.datePublished} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
