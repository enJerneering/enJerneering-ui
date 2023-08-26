"use client";

import React from "react";
import ReactCompareImage from "react-compare-image";
import Carousel, { ButtonGroupProps, DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface BeforeAfterComparisonProps {
  cases: Case[];
}

const responsive = {
  xl: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = (props) => {
  const { cases } = props;

  const getImagePreview = (index: number) => {
    return cases[index].firstImage;
  };

  const ButtonGroup = ({
    next,
    previous,
    goToSlide,
    ...rest
  }: ButtonGroupProps) => {
    const currentSlide = rest?.carouselState?.currentSlide;

    return (
      <div className="w-full flex flex-col gap-4 mx-6">
        <div className="bg-white px-6 py-4 gap-4 rounded-b-2xl">
          <h5>Case {currentSlide ? currentSlide + 1 : 1}</h5>
          <div className="flex justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={previous}
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-500" />
              <span className="text-base leading-8 font-semibold text-gray-500">
                Previous case
              </span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={next}
            >
              <span className="text-base leading-8 font-semibold text-gray-500">
                Next case
              </span>
              <ArrowRightIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
    return (
      <div
        className="flex flex-col items-center gap-2.5 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex rounded-2xl overflow-hidden">
          <Image
            src={getImagePreview(index as number)}
            alt="Case"
            width={290}
            height={374}
          />
        </div>
        <span className="text-base leading-8 font-semibold text-primary-900">
          Case {(index as number) + 1}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-primary-100 py-20">
      <h3 className="mx-auto max-w-screen-xl pt-20 px-6">Before & After</h3>

      <Carousel
        responsive={responsive}
        ssr
        deviceType={""}
        draggable={false}
        swipeable={false}
        arrows={false}
        showDots
        dotListClass="react-multi-carousel-dot-list-custom"
        className="mx-auto max-w-screen-xl flex-wrap py-10"
        customButtonGroup={<ButtonGroup />}
        customDot={<CustomDots />}
      >
        {cases.map((item) => (
          <div
            className="flex mx-6 rounded-t-2xl overflow-hidden react-compare-image-custom"
            key={item.id}
          >
            <ReactCompareImage
              leftImage={item.firstImage}
              rightImage={item.secondImage}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BeforeAfterComparison;
