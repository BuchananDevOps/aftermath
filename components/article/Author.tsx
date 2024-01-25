import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  image: string;
  name: string;
  handle: string;
};

const ArticleAuthor: FC<Props> = ({ image, name, handle }) => {
  return (
    <div className="flex items-center py-4 pr-4" id="article_author">
      <div className="" id="article_author_image">
        <Image
          alt={`${name} Authors Image`}
          className="h-10 w-10 flex-none rounded-full"
          height={75}
          src={image}
          width={75}
        />
      </div>
      <div className="flex flex-col ml-4" id="article_author_name">
        <p className=" font-semibold mb-0" itemProp="author">
          {name}
        </p>
        <Link
          className=""
          href={`https://twitter.com/${handle}`}
          target="_blank"
          title={`View ${handle} Twitter`}
        >
          <p className="text-sm text-blue-600">@{handle}</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleAuthor;
