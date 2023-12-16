"use client";

import React from "react";
import Button from "./Button";
import useRedirect from "@/_hooks/useRedirect";
import Link from "next/link";

interface HeroHeaderProps {
  heroHeaderUrlVideo: string;
  heroHeaderTitle: string;
  heroHeaderSubtitle: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  heroHeaderUrlVideo,
  heroHeaderTitle,
  heroHeaderSubtitle,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div className="relative bg-white m-h-[600px]">
      <video
        className="absolute top-0 w-full h-full opacity-60 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroHeaderUrlVideo} type="video/mp4" />
      </video>
      <div className="relative inset-0 flex flex-col justify-center items-center text-white px-8 py-20 min-h-[600px]">
        <h1 className="font-bold mb-4 text-center text-white">
          {heroHeaderTitle}
        </h1>
        <p className="text-lg mb-8 text-center">{heroHeaderSubtitle}</p>
        <div className="flex space-x-4">
          <Button label="Book an Appointment" onClick={handleRedirect} />
          <Link href="/contact-us">
            <Button label="Contact Us" color="secondary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
