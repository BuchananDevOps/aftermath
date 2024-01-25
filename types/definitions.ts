export type Author = {
  id?: string;
  name: string;
  url: string;
  email?: string;
};

export type Article = {
  slug: string;
  author: Author;
  alternateHeading?: string;
  articleBody: {
    articleSection?: string;
    paragraph: string;
    image?: string;
    alt?: string;
  }[];
  backstory: string;
  citation?: Citation[];
  datePublished: string;
  description: string;
  genre: "Web Design" | "Development" | "Seo";
  headline: string;
  keywords: string[];
  mentions: Mentions[];
  url: string;
  title: string;
  thumbnail: string;
  thumbnailUrl: string;
  image: string;
  timeRequired: string;
  wordCount: string;
};

export type Citation = {
  type?:
    | "Person"
    | "Organization"
    | "CreativeWork"
    | "WebPage"
    | "ScholarlyArticle";
  familyName?: string; // Last Name
  givenName?: string; // First Name
  sourceTitle: string; // Article Title
  containerTitle: string; // Website | Title of Site
  publisher?: string; // Organization | Differs from Container Soure
  datePublished: string; // Iso Format
  url: string;
  doi?: string;
};

export type Mentions = {
  type: "Thing";
  name: string;
  link: string;
};
