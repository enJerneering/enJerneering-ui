/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ContactData } from "./types/ContactData";
import { classNames } from "@/_utils/helpers";

interface ContactProps {
  data: ContactData;
}

const ContactType7: React.FC<ContactProps> = ({ data }) => {
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    phone = "+123456789",
    mail = "contact@enjerneering.com",
    address = "Default address",
    socials = [],
  } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20 flex flex-col gap-10">
        <div className="mx-auto w-full md:max-w-screen-xl lg:max-w-none text-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
              {title}
            </h2>
            <p className="text-base text-neutral-500">{subtitle}</p>
          </div>
          <div className="mt-10 flex flex-col gap-2">
            <span className="text-sm font-bold text-neutral-800 underline">
              <a href={`mailto:${mail}`}>{mail}</a>
            </span>
            <span className="text-sm font-bold text-neutral-800 underline">
              <a href={`tel:${phone}`}>{phone}</a>
            </span>
            <span className="text-sm font-bold text-neutral-800 underline">
              {address}
            </span>
          </div>
          <div className="">
            <ul role="list" className="mt-6 flex gap-x-4 justify-center">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="text-neutral-400 hover:text-neutral-500"
                  >
                    <span className="sr-only">{social.name}</span>
                    <i
                      className={classNames(
                        "pi text-neutral-500 text-[24px]",
                        social.icon
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactType7;
