"use client";

import React from "react";
import ButtonActions from "../ButtonActions";
import { HeaderData } from "./types/HeaderData";
import ModalVideo from "../ModalVideo";
import type { StaticImageData } from "next/image";

interface HeaderProps {
  data: HeaderData;
}

const HeaderType5: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    imgUrl = "default-image.jpg",
    videoUrl = "default-video.mp4",
  } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] min-h-[624px] py-20 px-6 gap-10  flex flex-col items-center justify-center lg:gap-16">
        <div className="w-full flex flex-col items-center justify-center gap-10 lg:h-full">
          <div className="flex flex-col gap-10 text-center">
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </div>

          <ButtonActions
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            primaryUrl={primaryUrl}
            secondaryUrl={secondaryUrl}
          />
        </div>
        <div className="flex justify-center w-full mt-10">
          <ModalVideo
            thumb={imgUrl as unknown as StaticImageData}
            thumbWidth={1280}
            thumbHeight={600}
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

export default HeaderType5;
