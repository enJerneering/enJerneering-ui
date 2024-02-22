/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { MainContentData } from "./types/MainContentData";
import ButtonActions from "../ButtonActions";

interface MainContentProps {
  data: MainContentData;
}

const MainContentType4: React.FC<MainContentProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    tagLine = "Default Tagline",
    imgUrl = "default-image.jpg",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
  } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-6 text-center max-w-[800px]">
            <span className="text-base uppercase font-bold text-neutral-500">
              {tagLine}
            </span>
            <h5>{title}</h5>
            <p className="text-base font-normal text-neutral-500">{subtitle}</p>
          </div>
          <ButtonActions
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            primaryUrl={primaryUrl}
            secondaryUrl={secondaryUrl}
          />
        </div>
        <div
          className="flex justify-center w-full h-[600px] mt-10 lg:mt-20 bg-center bg-cover rounded-2xl shadow-xl"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainContentType4;
