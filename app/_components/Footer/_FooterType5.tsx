"use client";

import React from "react";
import Image from "next/image";
import { FooterData } from "./types/FooterData";
import { companyName, year } from "@/pageData";
import { classNames } from "@/_utils/helpers";

interface FooterProps {
  data: FooterData;
}

const FooterType5: React.FC<FooterProps> = ({ data }) => {
  const { logo, slogan, socials, polices, singleLinks = [] } = data;

  return (
    <div className="z-30 bg-gray-50">
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-6 py-10 lg:px-20">
          <div className="mt-10 flex flex-col flex-wrap gap-6 items-center pt-10">
            <Image src={logo} alt="Logo" width={230} height={48} />
            <div className="flex gap-4 lg:flex-row lg:gap-10">
              {singleLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-base font-semibold text-neutral-800 hover:text-neutral-800"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 justify-around lg:justify-between border-t border-neutral-800/10 pt-10">
            <p className="text-center text-base font-normal text-neutral-500">
              &copy; {year}. Powered by {companyName}.
            </p>
            <div className="flex gap-4 lg:flex-row lg:gap-10">
              {polices.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-base font-normal text-neutral-500 hover:text-neutral-800"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-neutral-400 hover:text-neutral-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <i
                    className={classNames(
                      "pi text-neutral-500 text-[24px]",
                      item.icon
                    )}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterType5;
