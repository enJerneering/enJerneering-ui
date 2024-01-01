"use client";

import React from "react";
import Image from 'next/image';
import HeaderAction from "./elements/HeaderAction";
import { HeaderData } from "./types/HeaderData";

interface HeaderProps {
  data: HeaderData;
}

const HeaderType2: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    imgUrl = "default-image.jpg",
  } = data;

  return (
    <div className="bg-white m-h-[624px] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
        />
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-gray-500 opacity-50"></div> {/* Gray tint */}
      </div>

      <div className="mx-auto max-w-[960px] py-20 px-6 gap-10 md:flex lg:items-center lg:justify-center lg:gap-16 z-10 relative">
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="text-white">{title}</h1>
            <h6 className="text-white">{subtitle}</h6>
          </div>

          <HeaderAction
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            primaryUrl={primaryUrl}
            secondaryUrl={secondaryUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderType2;
