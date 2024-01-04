"use client";

import React from "react";
import { FeaturedData } from "../../types/NavbarData";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface HeaderActionProps {
  data: FeaturedData[];
}

const Featured: React.FC<HeaderActionProps> = ({ data }) => {
  const BlogItem = ({ item }: { item: FeaturedData }): JSX.Element => (
    <div className="flex gap-4">
      <Image
        width={160}
        height={529}
        src={item.imgUrl}
        alt="blog"
        className="object-cover object-center mx-auto rounded-2xl"
      />
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-base font-bold text-neutral-800">
          {item.title}
        </span>
        <span className="text-sm font-normal text-neutral-500">
          {item.subTitle}
        </span>
        <a href={item.blogUrl} className="text-xs font-medium text-neutral-500">
          Read more
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 px-10 py-6 bg-nav-100 ">
      <span className="text-sm font-normal text-neutral-500">Featured</span>
      {data.map((item, index) => (
        <BlogItem item={item} key={index} />
      ))}
      <div className="flex items-center gap-1">
        <a href="/" className="text-sm font-semibold text-neutral-500">
          See all articles
        </a>
        <ChevronRightIcon className="w-5 h-5 text-neutral-500" />
      </div>
    </div>
  );
};

export default Featured;
