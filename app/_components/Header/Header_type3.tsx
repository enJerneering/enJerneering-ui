"use client";

import React from "react";
import Button from "../Button";
import useRedirect from "@/_hooks/useRedirect";
import ModalVideo from "../ModalVideo";
import type { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  videoUrl: string;
  isRowReverse: boolean;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const HeaderType3: React.FC<HeaderProps> = ({
  title,
  subtitle,
  tagline,
  backgroundImage,
  videoUrl,
  isRowReverse,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div className="bg-white m-h-[624px]">
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
            <span className="text-base uppercase font-bold">{tagline}</span>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </div>

          <div className="flex items-center gap-4">
            <Button
              label="Button Content"
              iconLeft={<i className="pi pi-bolt"></i>}
              onClick={handleRedirect}
            />
            <Button
              color="secondary"
              label="Learn More…"
              onClick={handleRedirect}
            />
          </div>
        </div>
        <div className="mt-10 lg:h-full lg:w-1/2">
          <ModalVideo
            thumb={backgroundImage as unknown as StaticImageData}
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
