"use client";

import React from "react";
import Image from "next/image";
import { FooterData, Navigation } from "./types/FooterData";
import Button from "../Button";
import useRedirect from "@/_hooks/useRedirect";
import { classNames } from "@/_utils/helpers";

interface FooterProps {
  data: FooterData;
}

const FooterType2: React.FC<FooterProps> = ({ data }) => {
  const {
    logo,
    slogan,
    socials,
    navigation,
    polices,
    ctaButtonLabel,
    ctaButtonUrl = "/",
  } = data;
  const { handleRedirect } = useRedirect();

  const groupedNavigation: { [key: string]: Navigation[] } = {};

  navigation.forEach((item) => {
    const pageGroup = item.pageGroup || "Default";
    if (!groupedNavigation[pageGroup]) {
      groupedNavigation[pageGroup] = [];
    }
    groupedNavigation[pageGroup].push(item);
  });

  return (
    <div className="z-30">
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-6 py-10 lg:px-20">
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-20">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:col-span-3 gap-8">
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
            <div className="flex flex-col flex-shrink-0 gap-4 justify-center min-w-[320px] xl:justify-start">
              <p className="text-base font-normal text-neutral-500">{slogan}</p>
              <div className="relative mt-2 rounded-md shadow-sm">
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
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex">
                <Button
                  label={ctaButtonLabel}
                  iconLeft={<i className="pi pi-bolt"></i>}
                  onClick={() => handleRedirect(ctaButtonUrl)}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 justify-around lg:justify-between border-t border-neutral-800/10 pt-10">
            <Image src={logo} alt="Logo" width={230} height={48} />
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

export default FooterType2;
