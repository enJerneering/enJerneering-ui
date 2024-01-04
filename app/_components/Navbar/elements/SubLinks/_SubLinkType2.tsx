"use client";

import React from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/_utils/helpers";
import Featured from "../Featured";
import { featuredData } from "@/pageData";

interface HeaderProps {
  title: string;
  subLinks: App.SubLink[];
  isMobile: boolean;
}

const SubLinkType2: React.FC<HeaderProps> = ({ title, subLinks, isMobile }) => {
  const groupedSubLinks: { [key: string]: App.SubLink[] } = {};

  subLinks.forEach((subLink) => {
    const pageGroup = subLink.pageGroup || "Default";
    if (!groupedSubLinks[pageGroup]) {
      groupedSubLinks[pageGroup] = [];
    }
    groupedSubLinks[pageGroup].push(subLink);
  });

  const SubLinkMobile = (): JSX.Element => (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-8 text-gray-900">
            {title}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {Object.entries(groupedSubLinks).map(
              ([pageGroup, subLinks], index) => (
                <div className="flex flex-col gap-4 py-2 pl-6 pr-3" key={index}>
                  <span className="text-sm font-normal text-neutral-500">
                    {pageGroup}
                  </span>
                  {subLinks.map(({ title, href }, index) => (
                    <a
                      key={index}
                      className="block rounded-lg pl-3  text-sm font-semibold text-gray-800"
                      href={href}
                    >
                      <span>{title}</span>
                    </a>
                  ))}
                </div>
              )
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  const SubLinkWeb = (): JSX.Element => (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out focus:border-0 focus:outline-0 focus:text-primary-700">
            {title}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none transition-all duration-300 ease-out"
              )}
              aria-hidden="true"
            />
          </Popover.Button>
          <Popover.Panel className="absolute inset-x-0 top-0 mt-24 z-[1000] w-screen bg-white shadow-sm border border-gray-200">
            <div className="mx-auto grid grid-cols-2">
              <div className="grid grid-cols-2 px-6 py-6 lg:px-10 xl:gap-x-20 gap-y-6">
                {Object.entries(groupedSubLinks).map(
                  ([pageGroup, subLinks], index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      <span className="text-sm font-normal text-neutral-500">
                        {pageGroup}
                      </span>
                      <div className="flex flex-col gap-6">
                        {subLinks.map(({ title, subTitle, icon, href }) => (
                          <div className="flex gap-2" key={index}>
                            {icon && <i className={classNames("pi", icon)}></i>}
                            <a
                              key={title}
                              href={href}
                              className="flex flex-col gap-1 min-w-[175px] hover:text-primary-700 transition-all duration-300 ease-in-out"
                            >
                              <span className="text-sm leading-[14px] font-semibold text-neutral-800">
                                {title}
                              </span>
                              {subTitle && (
                                <span className="text-xs font-normal text-neutral-500">
                                  {subTitle}
                                </span>
                              )}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              <Featured data={featuredData} />
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );

  return <>{isMobile ? <SubLinkMobile /> : <SubLinkWeb />}</>;
};

export default SubLinkType2;
