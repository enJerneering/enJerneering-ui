/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ContactData } from "./types/ContactData";
import { MapPinIcon } from "@heroicons/react/24/outline";

interface ContactProps {
  data: ContactData;
}

const ContactType6: React.FC<ContactProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    phone = "+123456789",
    address = "Default address",
    addressLabel = "Default label",
    phoneLabel = "Default label",
    mapSrc = "default maps",
  } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20 flex flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-neutral-400 text-base uppercase font-bold">
              {title}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
              GET IN TOUCH
            </h2>
            <p className="text-base text-neutral-500">{subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4 flex-shrink-0">
              <div className="flex w-12 h-12 p-3 items-center justify-center rounded-lg bg-neutral-400">
                <MapPinIcon className="w-5 h-5 text-neutral-800" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-neutral-800">
                  Address
                </span>
                <span className="text-sm font-normal text-neutral-500">
                  {addressLabel}
                </span>
                <span className="text-sm font-bold text-neutral-800">
                  {address}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0">
              <div className="flex w-12 h-12 p-3 items-center justify-center rounded-lg bg-neutral-400">
                <i className="pi pi-phone text-[24px] text-neutral-800" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-neutral-800">
                  Phone
                </span>
                <span className="text-sm font-normal text-neutral-500">
                  {phoneLabel}
                </span>
                <span className="text-sm font-bold text-neutral-800">
                  <a href={`tel:${phone}`}>{phone}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[256px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          className="w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactType6;
