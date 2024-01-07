"use client";

import React from "react";
import Image from "next/image";
import { CallToActionData } from "./types/CallToActionData";
import ButtonActions from "../ButtonActions";
import { classNames } from "@/_utils/helpers";

interface CallToActionProps {
  data: CallToActionData;
}

const CallToActionType3: React.FC<CallToActionProps> = ({ data }) => {
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
  } = data;

  return (
    <div
      className={classNames(
        "mx-auto lg:flex lg:items-center lg:justify-between"
      )}
    >
      <div
        className={classNames(
          isRowReverse ? "lg:flex-row-reverse" : "",
          "lg:flex flex-1 h-full"
        )}
      >
        <div className="flex flex-col gap-10 w-full lg:h-full lg:w-1/2 px-6 py-20 lg:p-20 bg-neutral-800">
          <div className="flex flex-col gap-6 text-left">
            <span className="text-base uppercase font-bold text-neutral-500">
              {tagLine}
            </span>
            <h1 className="text-5xl leading-h4 text-gray-50">{title}</h1>
            <h6 className="leading-6">{subtitle}</h6>
          </div>

          <ButtonActions
            primaryLabel={primaryLabel}
            secondaryLabel={secondaryLabel}
            primaryUrl={primaryUrl}
            secondaryUrl={secondaryUrl}
          />
        </div>

        <div className="min-h-[464px] lg:w-1/2 lg:mt-0 relative">
          <div className="absolute inset-0 z-0">
            <Image
              alt="CTA Image"
              src={imgUrl}
              quality={100}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionType3;
