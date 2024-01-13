"use client";

import React from "react";
import Image from "next/image";
import { FooterData, Navigation } from "./types/FooterData";
import { companyName, year } from "@/pageData";
import { classNames } from "@/_utils/helpers";

interface FooterProps {
  data: FooterData;
}

const FooterType3: React.FC<FooterProps> = ({ data }) => {
  const { logo, slogan, socials, navigation, polices } = data;

  const groupedNavigation: { [key: string]: Navigation[] } = {};

  navigation.forEach((item) => {
    const pageGroup = item.pageGroup || "Default";
    if (!groupedNavigation[pageGroup]) {
      groupedNavigation[pageGroup] = [];
    }
    groupedNavigation[pageGroup].push(item);
  });

  return (
    <div className="z-30 bg-gray-50">
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div>
          <div className="flex flex-col gap-8 px-6 py-10 lg:px-20 xl:flex-row xl:gap-20">
            <div className="flex flex-col space-y-6 flex-shrink-0 xl:max-w-[480px] pb-6 border-b xl:border-r xl:border-b-0 xl:pr-20 border-neutral-800/10">
              <Image src={logo} alt="Logo" width={230} height={48} />
              <p className="text-base font-normal text-neutral-500">{slogan}</p>
              <p className="text-base font-normal text-neutral-500">
                &copy; {year}. Powered by {companyName}.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 xl:col-span-3 gap-8">
              {Object.entries(groupedNavigation).map(
                ([pageGroup, navigation], index) => (
                  <div key={index}>
                    <h3 className="uppercase text-base font-semibold text-neutral-800">
                      {pageGroup}
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {navigation.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.href}
                            className="text-base font-normal text-neutral-500 hover:text-neutral-800"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-between px-6 lg:px-20 py-6 bg-neutral-800">
            <div className="flex flex-shrink-0 gap-4 lg:justify-center min-w-[200px]">
              {polices.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-base font-normal text-gray-50 hover:text-neutral-500"
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
                      "pi text-gray-50 text-[24px]",
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

export default FooterType3;
