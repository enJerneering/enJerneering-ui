"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface PlaceholderProps {
  benefits: string[];
  teamImage: string;
  teamTitle: string;
  teamSubtitle: string;
  teamDescription: string;
  teamLabelButton: string;
}

const Team: React.FC<PlaceholderProps> = ({
  benefits,
  teamImage,
  teamTitle,
  teamSubtitle,
  teamDescription,
  teamLabelButton,
}) => {
  const router = useRouter();

  const handleLearnMore = (): void => {
    router.push("/michael-thorpe");
  };

  return (
    <div className="flex bg-primary-100 p-2">
      <div className="mx-auto max-w-screen-xl py-20 px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-20">
        <div className="flex dark: flex-col gap-6 w-full lg:h-full md:w-1/2 justify-center">
          <Image
            src={teamImage}
            width={500}
            height={600}
            alt="team"
            className="w-full"
          />
        </div>

        <div className="mt-10 flex flex-col items-start gap-6  lg:mt-0 lg:flex-shrink-0 lg:h-full md:w-1/2">
          <h5>{teamTitle}</h5>
          <div className="flex gap-5 border-l-[5px] border-primary-500 ">
            <h3 className="pl-[30px]">{teamSubtitle}</h3>
          </div>
          <ul
            role="list"
            className="flex flex-col gap-4 text-base font-semibold text-primary-900"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4">
                <CheckCircleIcon
                  className="h-7 w-5 flex-none"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <h6 className="whitespace-pre-line">{teamDescription}</h6>

          <Button
            label={teamLabelButton}
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
            onClick={handleLearnMore}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
