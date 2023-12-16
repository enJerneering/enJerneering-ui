/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { NavbarEnum } from "@/_enum/app";
import { serviceMenus, beforeAfterMenu } from "@/_constant/app";
import Banner from "./Banner";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const Logo = (): JSX.Element => (
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <img className="h-[60px] w-auto" src="/img/logo.svg" alt="logo" />
      </a>
    </div>
  );

  const BarIcon = (): JSX.Element => (
    <div className="flex">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2.5 text-black"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  );

  const CloseIcon = (): JSX.Element => (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-black"
      onClick={() => setMobileMenuOpen(false)}
    >
      <XMarkIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );

  const BookAppointment = ({ title }: { title: string }): JSX.Element => (
    <a
      href="https://www.vagaro.com/revitalizemedspa"
      className="flex items-center gap-1 h-10 py-2 px-3 rounded-lg text-[12px] font-semibold leading-6 text-white bg-primary-500 lg:h-auto lg:gap-2 lg:text-sm"
      target="_blank"
    >
      {title}
      <span>
        <ArrowRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
      </span>
    </a>
  );

  const ServiceMobile = (): JSX.Element => (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-8 text-gray-900">
            {NavbarEnum.Services}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {serviceMenus.map(({ title, href }: App.NavbarMenu) => (
              <a
                key={title}
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

  const ServiceWeb = (): JSX.Element => (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out focus:border-0 focus:outline-0 focus:text-primary-700">
            {NavbarEnum.Services}
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
              {serviceMenus.map(({ title, href }: App.NavbarMenu) => (
                <a
                  key={title}
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

  const BeforeAfterWeb = (): JSX.Element => (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out focus:border-0 focus:outline-0 focus:text-primary-700">
            {NavbarEnum.BeforeAfter}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none transition-all duration-300 ease-out"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Popover.Panel className="absolute -left-8 top-full z-[1000] max-w-[620px] rounded-md bg-white shadow-sm border border-gray-200">
            <div className="flex flex-col gap-4 justify-start items-center p-6">
              {beforeAfterMenu.map(({ title, href }: App.NavbarMenu) => (
                <a
                  key={title}
                  href={href}
                  className="text-sm font-normal text-gray-500 w-[175px] hover:text-primary-700 transition-all duration-300 ease-in-out"
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

  const BeforeAfterMobile = (): JSX.Element => (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-8 text-gray-900">
            {NavbarEnum.BeforeAfter}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {beforeAfterMenu.map(({ title, href }: App.NavbarMenu) => (
              <a
                key={title}
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

  const MobileNavBar = (): JSX.Element => (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-[1000]" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <CloseIcon />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="/"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.Home}
              </a>
              <a
                href="/about-us"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.AboutUs}
              </a>
              <ServiceMobile />
              <BeforeAfterMobile />
              <a
                href="/blog"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.Blog}
              </a>
              <a
                href="/contact-us"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.ContactUs}
              </a>
            </div>
            <div className="py-6">
              <BookAppointment title="Book Appointment" />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );

  const social = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/revitalize_med_spa/",
      icon: "/img/instagram.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ReVitalizeMedSpaMuncieIndiana",
      icon: "/img/facebook.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@revitalize_medspa",
      icon: "/img/tiktok.svg",
    }
  ];

  return (
    <header className="bg-white z-50">      
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between pt-4 pb-5 lg:px-3 sm:px-6 px-6"
        aria-label="Global"
      >
        <Logo />
              <div className="flex space-x-4 lg:mr-16">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
        <div className="flex items-center gap-2 lg:hidden">
          <BookAppointment title="Book Now" />
          <BarIcon />
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
          <a
            href="/"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.Home}
          </a>
          <a
            href="/about-us"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.AboutUs}
          </a>
          <ServiceWeb />
          <BeforeAfterWeb />
          <a
            href="/blog"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.Blog}
          </a>
          <a
            href="/contact-us"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.ContactUs}
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <BookAppointment title="Book Now" />
        </div>
      </nav>
      <MobileNavBar />
    </header>
  );
}
