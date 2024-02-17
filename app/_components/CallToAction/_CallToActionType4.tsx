/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import { CallToActionData } from "./types/CallToActionData";
import ButtonActions from "../ButtonActions";
import { classNames } from "@/_utils/helpers";
import Button from "../Button";

interface CallToActionProps {
  data: CallToActionData;
}

const CallToActionType4: React.FC<CallToActionProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    tagLine = "Default Tagline",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    imgUrl = "default-image.jpg",
    isRowReverse = false,
    backgroundColor = false,
  } = data;

  return (
    <div className="bg-gray-50 relative p-20">
      <div className="mx-auto max-w-[1440px] py-20 px-6 gap-10 lg:p-20 md:flex lg:items-center lg:justify-center lg:gap-10 relative bg-neutral-800">
        <div className="mx-auto max-w-screen-xl mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-6 text-center">
            {tagLine && (
              <span className="text-neutral-400 text-base uppercase font-bold">
                {tagLine}
              </span>
            )}
            <h1 className="text-5xl leading-h4 text-gray-50">{title}</h1>
            <h6 className="leading-6 text-gray-50">{subtitle}</h6>
          </div>

          <ButtonActions
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

export default CallToActionType4;
