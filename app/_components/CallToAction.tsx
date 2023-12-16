"use client";

import React from "react";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import useRedirect from "@/_hooks/useRedirect";
import Image from "next/image";

interface CallToActionProps {
  ctaBgImage: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonLabel: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  ctaBgImage,
  ctaTitle,
  ctaSubtitle,
  ctaButtonLabel,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div
      style={{ backgroundImage: `url(${ctaBgImage})` }}
      className="relative bg-contain "
    >
      <div className="mx-auto max-w-screen-xl py-20 px-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 max-w-[450px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {ctaTitle}
          </h2>
          <p>{ctaSubtitle}</p>
        </div>
        <div className="flex flex-col items-center my-4">
          <Image
            src="/img/logo.svg"
            alt="ReVitalize Med Spa Logo"
            width={250}
            height={125}
          />
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button
            label={ctaButtonLabel}
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
            onClick={handleRedirect}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
