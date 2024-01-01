"use client";

import React from "react";
import { HeaderAction } from "./elements/HeaderAction";

interface HeaderProps {
  data: App.Header;
}

const HeaderType1: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    btnPrimaryLabel = "Primary Button",
    btnSecondaryLabel = "Secondary Button",
    btnPrimaryUrl = "#",
    btnSecondaryUrl = "#",
  } = data;

  return (
    <div className="bg-white m-h-[624px]">
      <div className="mx-auto max-w-[960px] py-20 px-6 gap-10  md:flex lg:items-center lg:justify-center lg:gap-16">
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-10 text-center">
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
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

export default HeaderType1;
