import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface AboutProps {
  // Define any props you need here
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// Todo hard code
const about = [
  {
    name: "Personalized Skincare Treatments for You",
    description:
      "Our skilled team of skincare specialists and medical professionals is dedicated to learning about your specific skin type, issues, and preferences. We believe in a personalized approach to skincare, and we adjust our treatments to your specific needs, delivering consistently excellent results.",
    features: [
      "Dedicated experts",
      "Personalized approach",
      "Consistent excellence",
    ],
    imageSrc: "/img/skincare-treatments.png",
    imageAlt: "Personalized Skincare Treatments",
  },
  {
    name: "Our Wide Range of Services",
    description:
      "At ReVitalize Med Spa, we provide a variety of services, ranging from luxurious facials to modern procedures such as chemical peels and dermal fillers. We attempt to improve the appearance of your skin and enhance your confidence by utilizing cutting-edge technology and high-quality products.",
    features: [
      "Diverse offerings",
      "Enhanced skin and confidence",
      "Comprehensive approach",
      "Quality technology and products",
    ],
    imageSrc: "/img/wide-range.png",
    imageAlt: "Our Wide Range",
  },
  {
    name: "Creating a Relaxing Sanctuary for You",
    description:
      "We recognize that a spa is more than just a location that offers treatments; it's a haven where you can unwind, revitalize, and rediscover your beauty. We are committed to providing a warm, friendly environment in which you can feel at ease.",
    features: [
      "Spa as a sanctuary",
      "Warm and friendly atmosphere",
      "Unwind and revitalize",
    ],
    imageSrc: "/img/relaxing-sanctuary.png",
    imageAlt: "Relaxing Sanctuary",
  },
  {
    name: "Our Commitment to Your Beauty",
    description:
      "Our goal at ReVitalize Med Spa is not just to enhance your beauty; we want you to feel truly revitalized on the inside and out. We look forward to meeting you and helping you shine with confidence.",
    features: ["Holistic rejuvenation", "Inner and outer transformation"],
    imageSrc: "/img/our-commitment.png",
    imageAlt: "Personalized Skincare Treatments",
  },
];

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl py-20 px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="space-y-20">
          {about.map((item, itemIdx) => (
            <div
              key={item.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-16"
            >
              <div
                className={classNames(
                  itemIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-7",
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
                  itemIdx % 2 === 0
                    ? "lg:col-start-7 xl:col-start-7"
                    : "lg:col-start-1",
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
