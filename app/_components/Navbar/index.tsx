/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/_utils/helpers";
import { NavbarData } from "./types/NavbarData";
import SubLink from "./elements/SubLinks";

interface NavbarProps {
  type: number;
  data: NavbarData;
}

const Navbar: React.FC<NavbarProps> = ({ type, data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const { logo, menuList, ctaButton, justifyContent } = data;

  const Logo = (): JSX.Element => (
    <div className="flex">
      <a href="/" className="-m-1.5 p-1.5">
        <img className="h-[60px] w-auto" src={logo} alt="logo" />
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

  const ActionButton = ({
    label,
    href,
  }: {
    label: string;
    href: string;
  }): JSX.Element => (
    <a
      href={href}
      className="flex items-center gap-1 h-10 py-2 px-3 rounded-lg text-[12px] font-semibold leading-6 text-black bg-primary-600 lg:h-auto lg:gap-2 lg:text-sm"
      target="_blank"
    >
      <i className="pi pi-bolt"></i>
      {label}
    </a>
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
              {menuList.map((menuItem, menuIndex) => {
                return menuItem.subLinks ? (
                  <SubLink
                    type={type}
                    title={menuItem.title}
                    subLinks={menuItem.subLinks}
                    isMobile={true}
                    key={menuIndex}
                  />
                ) : (
                  <a
                    key={menuIndex}
                    href={menuItem.href}
                    className="block py-2 text-base font-semibold leading-8 text-gray-900"
                  >
                    {menuItem.title}
                  </a>
                );
              })}
            </div>
            <div className="py-6">
              <ActionButton label={ctaButton.label} href={ctaButton.href} />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );

  return (
    <header className="bg-white z-50 relative">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-20 pt-4 pb-5 lg:px-3 sm:px-6 px-6"
        aria-label="Global"
      >
        <Logo />

        <div className="flex items-center gap-2 lg:hidden">
          <ActionButton label={ctaButton.label} href={ctaButton.href} />
          <BarIcon />
        </div>
        <Popover.Group
          className={classNames(
            "hidden lg:flex lg:flex-1 lg:gap-x-6 xl:gap-x-12",
            justifyContent ? `justify-${justifyContent}` : "justify-start"
          )}
        >
          {menuList.map((menuItem, menuIndex) => {
            return menuItem.subLinks ? (
              <SubLink
                type={type}
                title={menuItem.title}
                subLinks={menuItem.subLinks}
                isMobile={false}
                key={menuIndex}
              />
            ) : (
              <a
                key={menuIndex}
                href={menuItem.href}
                className="text-base font-semibold leading-8 text-gray-900 hover:text-primary-700 transition-all duration-300 ease-in-out"
              >
                {menuItem.title}
              </a>
            );
          })}
        </Popover.Group>
        <div className="hidden lg:flex lg:justify-end">
          <ActionButton label={ctaButton.label} href={ctaButton.href} />
        </div>
      </nav>
      <MobileNavBar />
    </header>
  );
};

export default Navbar;
