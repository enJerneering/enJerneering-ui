/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import { NavbarEnum } from "@/_enum/app";
import { serviceMenus, beforeAfterMenu } from "@/_constant/app";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const Logo = (): JSX.Element => (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <img className="h-[60px] w-auto" src="/img/logo.svg" alt="logo" />
      </Link>
    </div>
  );

  const BarIcon = (): JSX.Element => (
    <div className="flex lg:hidden">
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

  const BookAppointment = (): JSX.Element => (
    <a
      href="https://www.patientfusion.com/doctor/michael-thorpe-md-44356"
      className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold leading-6 text-white bg-primary-500"
      target="_blank"
    >
      Book Appointment
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
              <Link
                key={title}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal text-gray-500"
                href={href}
              >
                {title}
              </Link>
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

          <Popover.Panel className="absolute -left-8 top-full z-10 w-screen max-w-[620px] rounded-md bg-white shadow-sm border border-gray-200">
            <div className="grid grid-cols-3 gap-4 p-6">
              {serviceMenus.map(({ title, href }: App.NavbarMenu) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm font-normal text-gray-500 min-w-[175px] hover:text-primary-700 transition-all duration-300 ease-in-out"
                >
                  {title}
                </Link>
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

          <Popover.Panel className="absolute -left-8 top-full z-10 max-w-[620px] rounded-md bg-white shadow-sm border border-gray-200">
            <div className="flex flex-col gap-4 justify-start items-center p-6">
              {beforeAfterMenu.map(({ title, href }: App.NavbarMenu) => (
                <Link
                  key={title}
                  href={href}
                  className="text-sm font-normal text-gray-500 w-[175px] hover:text-primary-700 transition-all duration-300 ease-in-out"
                >
                  {title}
                </Link>
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
              <Link
                key={title}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal text-gray-500"
                href={href}
              >
                {title}
              </Link>
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
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <CloseIcon />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="/"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.Home}
              </Link>
              <Link
                href="/about-us"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.AboutUs}
              </Link>
              <ServiceMobile />
              <BeforeAfterMobile />
              <Link
                href="/blog"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.Blog}
              </Link>
              <Link
                href="/contact-us"
                className="block py-2 text-base font-semibold leading-8 text-gray-900"
              >
                {NavbarEnum.ContactUs}
              </Link>
            </div>
            <div className="py-6">
              <BookAppointment />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between pt-4 pb-5 lg:px-3 sm:px-6 px-6"
        aria-label="Global"
      >
        <Logo />
        <BarIcon />
        <Popover.Group className="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
          <Link
            href="/"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.Home}
          </Link>
          <Link
            href="/about-us"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.AboutUs}
          </Link>
          <ServiceWeb />
          <BeforeAfterWeb />
          <Link
            href="/blog"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.Blog}
          </Link>
          <Link
            href="/contact-us"
            className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
          >
            {NavbarEnum.ContactUs}
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <BookAppointment />
        </div>
      </nav>
      <MobileNavBar />
    </header>
  );
}
