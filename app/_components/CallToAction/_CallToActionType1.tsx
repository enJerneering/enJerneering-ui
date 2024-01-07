"use client";

import React from "react";
import { CallToActionData } from "./types/CallToActionData";
import ButtonActions from "../ButtonActions";
import Image from "next/image";
import { classNames } from "@/_utils/helpers";

interface CallToActionProps {
  data: CallToActionData;
}

const CallToActionType1: React.FC<CallToActionProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    tagLine,
    imgUrl,
  } = data;

  return (
    <div className={classNames(imgUrl ? "relative" : "", "bg-neutral-800")}>
      {imgUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background Image"
          />
          {/* Tint Overlay */}
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>{" "}
          {/* Gray tint */}
        </div>
      )}

      <div className="mx-auto max-w-[960px] py-20 px-6 gap-10  md:flex lg:items-center lg:justify-center lg:gap-16 relative">
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
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

export default CallToActionType1;
