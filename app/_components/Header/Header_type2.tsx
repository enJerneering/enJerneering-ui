"use client";

import React from "react";
import Button from "../Button";
import useRedirect from "@/_hooks/useRedirect";

interface HeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeaderType2: React.FC<HeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  const { handleRedirect } = useRedirect();

  return (
    <div
      className="bg-white m-h-[624px]"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${backgroundImage}), lightgray 50%`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-[960px] py-20 px-6 gap-10  md:flex lg:items-center lg:justify-center lg:gap-16">
        <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:mt-0 lg:h-full">
          <div className="flex flex-col gap-10 text-center">
            <h1 className="text-white">{title}</h1>
            <h6 className="text-white">{subtitle}</h6>
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
      </div>
    </div>
  );
};

export default HeaderType2;
