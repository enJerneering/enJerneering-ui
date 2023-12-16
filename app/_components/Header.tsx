"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import useRedirect from "@/_hooks/useRedirect";

interface HeaderProps {
  features: Feature[];
  imgSrc: string;
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({
  features,
  imgSrc,
  title,
  subtitle,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div className="flex">
      <div className="mx-auto max-w-screen-xl py-20 px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col justify-center gap-6 w-full lg:h-full md:w-1/2">
          <Image
            src={imgSrc}
            width={424}
            height={530}
            alt="team"
            className="w-full"
          />
        </div>

        <div className="mt-10 flex flex-col items-start justify-center gap-10 lg:mt-0 lg:flex-shrink-0 lg:h-full md:w-1/2">
          <div className="flex flex-col gap-4">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>

          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div className="flex flex-col gap-1" key={feature.id}>
                <h6 className="font-bold text-gray-900">{feature.title}</h6>
                <span className="text-sm leading-6 text-gray-500">
                  {feature.description}
                </span>
              </div>
            ))}
          </div>

          <Button
            label="Book Appointment"
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
            onClick={handleRedirect}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
