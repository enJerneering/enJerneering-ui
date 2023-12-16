import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";

interface ServiceExplanationProps {
  features: Feature[];
  title: string;
}

const ServiceExplanation: React.FC<ServiceExplanationProps> = ({ features, title }) => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl text-center lg:mx-0">
          <h3>{title}</h3>
        </div>
        <dl className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-20 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="inline-flex p-4 items-center rounded-lg bg-primary-100 mb-6">
                <CheckIcon className="w-6 h-6 text-primary-900" />
              </div>
              <h6 className="font-bold">{feature.title}</h6>
              <span className="mt-1 text-sm leading-6 text-gray-500">
                {feature.description}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ServiceExplanation;
