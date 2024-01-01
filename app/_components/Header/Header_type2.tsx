"use client";

import React from "react";
import { HeaderAction } from "./elements/HeaderAction";

interface HeaderProps {
  data: App.Header;
}

const HeaderType2: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    btnPrimaryLabel = "Primary Button",
    btnSecondaryLabel = "Secondary Button",
    btnPrimaryUrl = "#",
    btnSecondaryUrl = "#",
    imgUrl = "default-image.jpg",
  } = data;

  return (
    <div
      className="bg-white m-h-[624px]"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${imgUrl}), lightgray 50%`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-[960px] py-20 px-6 gap-10  md:flex lg:items-center lg:justify-center lg:gap-16">
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="text-white">{title}</h1>
            <h6 className="text-white">{subtitle}</h6>
          </div>

          <HeaderAction
            btnPrimaryLabel={btnPrimaryLabel}
            btnSecondaryLabel={btnSecondaryLabel}
            btnPrimaryUrl={btnPrimaryUrl}
            btnSecondaryUrl={btnSecondaryUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderType2;
