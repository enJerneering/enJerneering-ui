"use client";

import React from "react";
import useRedirect from "@/_hooks/useRedirect";
import ButtonActions from "../ButtonActions";
import { HeaderData } from "./types/HeaderData";
import Button from "../Button";

interface HeaderProps {
  data: HeaderData;
}

const HeaderType4: React.FC<HeaderProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    primaryLabel = "Primary Button",
    secondaryLabel = "Secondary Button",
    primaryUrl = "#",
    secondaryUrl = "#",
    tagLine = "Default Tag Line",
    videoUrl = "default-video.mp4",
    hasEmailAction = false,
  } = data;
  const { handleRedirect } = useRedirect();

  return (
    <div className="bg-gray-50">
      <div className="relative w-full min-h-[680px] h-full">
        <video
          className="absolute top-0 w-full h-full opacity-60 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-20 gap-10 lg:p-20 lg:flex lg:items-center lg:justify-between lg:gap-20">
        <div className="mx-auto max-w-screen-xl lg:mx-0 flex flex-col gap-10 w-full lg:h-full lg:w-1/2">
          <div className="flex flex-col gap-6 text-left">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl mt-10 lg:h-full lg:w-1/2 lg:mt-0">
          <div className="flex flex-col gap-6 mb-10">
            <span className="text-base uppercase font-bold text-neutral-500">
              {tagLine}
            </span>
            <h6>{subtitle}</h6>
          </div>

          {hasEmailAction ? (
            <div className="flex gap-6 items-center">
              <div className="relative flex-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <i
                    className="pi pi-envelope text-neutral-500"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
              <Button
                label={primaryLabel}
                iconLeft={<i className="pi pi-bolt"></i>}
                onClick={() => handleRedirect(primaryUrl)}
              />
            </div>
          ) : (
            <ButtonActions
              primaryLabel={primaryLabel}
              secondaryLabel={secondaryLabel}
              primaryUrl={primaryUrl}
              secondaryUrl={secondaryUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderType4;
