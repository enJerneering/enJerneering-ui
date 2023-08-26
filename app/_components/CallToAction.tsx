import React from "react";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface PlaceholderProps {
  // Define any props you need here
}

const CallToAction: React.FC<PlaceholderProps> = (props) => {
  // Todo hard code
  const imgUrl = "/img/bg-cta.png";

  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="relative bg-contain"
    >
      <div className="mx-auto max-w-screen-xl py-20 px-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 max-w-[450px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make an Appointment Now!
          </h2>
          <p>
            You want to ask something to us, just by clicking the button next to
            it and contact us directly.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button
            label="Book Appointment"
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
