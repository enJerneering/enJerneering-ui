"use client";

import React from "react";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const responsive = {
  xl: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
    slidesToSlide: 4,
  },
  lg: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  sm: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface GalleryProps {
  services: Service[];
  galleryTitle: string;
}

const Gallery: React.FC<GalleryProps> = ({ services, galleryTitle }) => {
  const CarouselItem = ({ item }: { item: Service }): JSX.Element => (
    <Link href={item.href}>
      <div
        style={{ backgroundImage: `url(${item.imgUrl})` }}
        className="group flex mx-6 h-[400px] rounded-2xl bg-cover bg-bottom overflow-hidden"
      >
        <div className="flex flex-col justify-end gap-6 w-full pl-6 pb-8 text-white bg-linear-1 opacity-70 lg:group-hover:opacity-90 lg:group-hover:animate-slide-up">
          <span className="text-sm leading-6 font-normal">{item.category}</span>
          <div>
            <h5 className="text-white">{item.title}</h5>
            <span className="text-base leading-8 font-normal">
              {item.subTitle}
            </span>
          </div>
          <div className="sm:hidden group-hover:block">
            <Button
              color="secondary"
              label="Learn more"
              icon={<ArrowLongRightIcon className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </Link>
  );

  const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
    return (
      <button
        className={`h-3 rounded-full ${
          active ? "w-[50px] bg-primary-500" : "w-3 bg-gray-500"
        }`}
        onClick={onClick}
      />
    );
  };

  return (
    <div className="p-2 mb-10">
      <h3 className="mx-auto max-w-screen-xl px-6 text-center">{galleryTitle}</h3>
      <Carousel
        responsive={responsive}
        ssr
        autoPlay
        autoPlaySpeed={3000}
        rewind
        deviceType={""}
        arrows
        showDots
        dotListClass="flex gap-3"
        className="mx-auto max-w-screen-xl py-10"
        customDot={<CustomDots />}
      >
        {services.map((item) => (
          <CarouselItem item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
