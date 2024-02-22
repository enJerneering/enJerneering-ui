/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { MainContentData, SubHeading } from "./types/MainContentData";
import Image from "next/image";

interface MainContentProps {
  data: MainContentData;
}

const SubHeadingItem = ({ item }: { item: SubHeading }): JSX.Element => (
  <div className="flex flex-col p-2 gap-3.5 items-center">
    <Image
      src="/img/check-circle.svg"
      width={24}
      height={24}
      alt="check-icon"
    />
    <div className="flex flex-col items-center text-center gap-1">
      <span className="text-sm font-semibold text-neutral-800">
        {item.title}
      </span>
      <span className="text-sm font-normal text-neutral-500">
        {item.subtitle}
      </span>
    </div>
  </div>
);

const MainContentType5: React.FC<MainContentProps> = ({ data }) => {
  const {
    tagLine = "Default TagLine",
    title = "Default Title",
    subtitle = "Default Subtitle",
    subHeading = [],
  } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="mx-auto w-full flex flex-col gap-6 lg:mx-0 text-center">
          <span className="text-base uppercase font-bold text-neutral-500">
            {tagLine}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            {title}
          </h2>
          <p className="text-base text-neutral-500">{subtitle}</p>
        </div>
        <div className="flex justify-center w-full mt-10">
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:grid-cols-3"
          >
            {subHeading.map((item, index) => (
              <SubHeadingItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContentType5;
