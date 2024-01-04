"use client";

import React from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/_utils/helpers";

interface HeaderProps {
  title: string;
  subLinks: App.SubLink[];
  isMobile: boolean;
}

const SubLinkType1: React.FC<HeaderProps> = ({ title, subLinks, isMobile }) => {
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
            {subLinks.map(({ title, href }: App.SubLink, index) => (
              <a
                key={index}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal text-gray-500"
                href={href}
              >
                {title}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  const SubLinkWeb = (): JSX.Element => (
    <Popover className="relative">
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

          <Popover.Panel className="absolute -left-8 top-full z-[1000] w-screen max-w-[620px] rounded-md bg-white shadow-sm border border-gray-200">
            <div className="grid grid-cols-3 gap-4 p-6">
              {subLinks.map(({ title, href }: App.SubLink, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-sm font-normal text-gray-500 min-w-[175px] hover:text-primary-700 transition-all duration-300 ease-in-out"
                >
                  {title}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );

  return <>{isMobile ? <SubLinkMobile /> : <SubLinkWeb />}</>;
};

export default SubLinkType1;
