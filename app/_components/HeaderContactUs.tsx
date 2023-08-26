import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";

interface HeaderContactUsProps {
  // Define any props you need here
}

interface Information {
  id: string;
  icon: any;
  title: string;
  description: string;
}

const HeaderContactUs: React.FC<HeaderContactUsProps> = (props) => {
  // Todo hard code
  const information: Information[] = [
    {
      id: "email",
      icon: <EnvelopeIcon className="w-10 h-10" />,
      title: "Email us:",
      description: "michaelthorpemd@gmail.com",
    },
    {
      id: "call",
      icon: <PhoneIcon className="w-10 h-10" />,
      title: "Call us:",
      description: "(765) 372-8187",
    },
    {
      id: "email",
      icon: <MapPinIcon className="w-10 h-10" />,
      title: "Address:",
      description: "1714 W Royale Dr, Muncie, IN 47304",
    },
  ];

  const ItemInfo = ({ item }: { item: Information }): JSX.Element => (
    <div className="flex gap-4">
      <div className="flex p-3 items-center rounded-lg bg-gray-100">
        {item.icon}
      </div>
      <div className="text-left">
        <p className="text-base leading-8 font-bold text-gray-900">
          {item.title}
        </p>
        <p className="text-base leading-8 font-bold text-primary-700">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl text-center py-20 px-6 gap-10 md:flex md:items-center md:justify-between md:gap-16">
        <div className="flex flex-col gap-6 w-full lg:h-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.6733793077287!2d-85.40896978931627!3d40.21632787823946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88153d62cca23155%3A0xe52ccd52fe7b8f1!2s1714%20W%20Royale%20Dr%2C%20Muncie%2C%20IN%2047304%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1692693233405!5m2!1svi!2s"
            width="608"
            height="360"
            className="rounded-3xl w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-10 flex flex-col items-start gap-10  md:mt-0 md:flex-shrink-0 md:h-full md:w-1/2 md:gap-5">
          <h4>We’d Love To Hear From You!</h4>
          <div className="flex flex-col gap-10 md:gap-5">
            {information.map((item, index) => (
              <ItemInfo item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContactUs;
