"use client";

import React from "react";
import ModalVideo from "../ModalVideo";
import type { StaticImageData } from "next/image";
import HeaderAction from "./elements/HeaderAction";
import { HeaderData } from "./types/HeaderData";

interface HeaderProps {
  data: HeaderData;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const HeaderType3: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    tagLine = "Default Tagline",
    imgUrl = "default-image.jpg",
    videoUrl = "default-video.mp4",
    isRowReverse = false,
  } = data;

  return (
    <div className="bg-gray-50 m-h-[624px]">
      <div
        className={classNames(
          "mx-auto max-w-[1440px] px-6 py-20 gap-10 lg:p-20 lg:flex lg:items-center lg:justify-between lg:gap-20",
          {
            "lg:flex-row-reverse": isRowReverse,
          }
        )}
      >
        <div className="flex flex-col gap-10 w-full lg:h-full lg:w-1/2">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-base uppercase font-bold">{tagLine}</span>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </div>

          <HeaderAction
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            primaryUrl={primaryUrl}
            secondaryUrl={secondaryUrl}
          />
        </div>
        <div className="mt-10 lg:h-full lg:w-1/2">
          <ModalVideo
            thumb={imgUrl as unknown as StaticImageData}
            thumbWidth={600}
            thumbHeight={464}
            thumbAlt="Modal video thumbnail"
            video={videoUrl}
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderType3;
