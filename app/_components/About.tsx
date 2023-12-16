import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface AboutProps {
  about: About[];
  inverted?: boolean;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const About: React.FC<AboutProps> = ({ about, inverted = false }) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl py-20 px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="space-y-20">
          {about.map((item, itemIdx) => {
            const shouldInvert = (itemIdx % 2 === 0) !== inverted;
            const startColumn = shouldInvert ? "lg:col-start-1" : "lg:col-start-8 xl:col-start-7";
            const imgStartColumn = shouldInvert ? "lg:col-start-7 xl:col-start-7" : "lg:col-start-1";

            return (
              <div
                key={item.name}
                className="flex flex-col-reverse mt-8 mb-8 p-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-16"
              >
                <div
                  className={classNames(
                    startColumn,
                    "mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0 xl:col-span-6"
                  )}
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <h3>{item.name}</h3>
                      <h6>{item.description}</h6>
                    </div>
                    <ul
                      role="list"
                      className="flex flex-col gap-4 pt-8 text-base leading-8 font-semibold text-primary-900 border-t border-gray-200"
                    >
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-4">
                          <CheckCircleIcon
                            className="h-7 w-5 flex-none text-primary-500"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={classNames(
                    imgStartColumn,
                    "flex-auto lg:col-span-6 lg:row-start-1 xl:col-span-6"
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-2xl">
                    <Image
                      width={608}
                      height={529}
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="object-cover object-center mx-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
