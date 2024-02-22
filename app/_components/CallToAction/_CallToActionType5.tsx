/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { CallToActionData } from "./types/CallToActionData";
import Button from "../Button";
import useRedirect from "@/_hooks/useRedirect";

interface CallToActionProps {
  data: CallToActionData;
}

const CallToActionType5: React.FC<CallToActionProps> = ({ data }) => {
  const { handleRedirect } = useRedirect();

  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    tagLine = "Default Tagline",
    primaryLabel = "Primary Button",
    primaryUrl = "#",
  } = data;

  return (
    <div className="bg-gray-50 relative px-6 py-20 lg:p-20">
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

          <div className="flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-6 lg:flex-row lg:w-[623px]">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block flex-1 rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 Contact:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button
                label={primaryLabel}
                iconLeft={<i className="pi pi-bolt"></i>}
                onClick={() => handleRedirect(primaryUrl)}
              />
            </div>
            <div className="text-base font-medium text-gray-50">
              By clicking Sign Up you're confirming that you agree with our{" "}
              <a className="text-base font-bold" href="/">
                Terms and Conditions
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionType5;
