"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface PlaceholderProps {
  // Define any props you need here
}

const Team: React.FC<PlaceholderProps> = (props) => {
  const router = useRouter();

  const handleViewDoctor = (): void => {
    router.push(`/michael-thorpe`);
  };

  const benefits = [
    "Minimally invasive surgery specialist",
    "Founder of Indiana Vein Institute and ReVitalize Med Spa",
    "Specializes in varicose veins and surgical dermatology",
  ];

  return (
    <div className="flex bg-primary-100">
      <div className="mx-auto max-w-screen-xl py-20 px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-20">
        <div className="flex flex-col gap-6 w-full lg:h-full md:w-1/2">
          <Image
            src="/img/team.png"
            width={424}
            height={530}
            alt="team"
            className="w-full"
          />
        </div>

        <div className="mt-10 flex flex-col items-start gap-6  lg:mt-0 lg:flex-shrink-0 lg:h-full md:w-1/2">
          <h5>Meet The Doctor</h5>
          <div className="flex gap-5 border-l-[5px] border-primary-500 ">
            <h3 className="pl-[30px]">
              Dr. Thorpe, the face behind ReVitalize!
            </h3>
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
          <h6>
            Michael Thorpe, MD, is a minimally invasive surgery specialist and
            founder of the Indiana Vein Institute and, most recently, ReVitalize
            Med Spa. Dr. Thorpe specializes in varicose veins and surgical
            dermatology, which sparked his passion to help people on their
            journey to look and feel like their authentic selves.
            <br />
            This passion sparked his vision to open ReVitalize Med Spa where his
            goal is to enhance your natural beauty and individual qualities
            through medical-grade procedures and therapies.
          </h6>

          <Button
            label="Learn more"
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
            onClick={handleViewDoctor}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
