import React from "react";

interface HeaderContactUsProps {
  information: Information[];
  mapSrc: string;
}

const HeaderContactUs: React.FC<HeaderContactUsProps> = ({
  information,
  mapSrc,
}) => {
  const ItemInfo = ({ item }: { item: Information }): JSX.Element => (
    <div className="flex gap-4">
      <div className="flex p-3 items-center rounded-lg bg-gray-100">
        {item.icon}
      </div>
      <div className="text-left">
        <h1 className="text-base leading-8 font-bold text-gray-900">
          {item.title}
        </h1>
        <p className="text-base leading-8 font-bold text-primary-700">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mx-auto max-w-screen-xl text-center py-20 px-6 gap-10 md:flex md:items-center md:justify-between md:gap-16">
        <div className="flex flex-col gap-6 w-full lg:h-full md:w-1/2">
          <iframe
            src={mapSrc}
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
