"use client";

import React from "react";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

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

interface Service {
  id: string;
  category: string;
  title: string;
  subTitle: string;
  imgUrl: string;
}

const Gallery: React.FC = () => {
  // Todo hard code
  const services: Service[] = [
    {
      id: "1",
      category: "Skin",
      title: "Scarlet SRF",
      subTitle: "SRF",
      imgUrl: "/img/scarlet-srf-min.jpeg",
    },
    {
      id: "2",
      category: "Skin",
      title: "Laser Resurfacing",
      subTitle: "Laser Treatments",
      imgUrl: "/img/laser-resurfacing-min.jpeg",
    },
    {
      id: "3",
      category: "Skin",
      title: "HALO",
      subTitle: "Laser Treatments",
      imgUrl: "/img/HALO-min.jpeg",
    },
    {
      id: "4",
      category: "Skin",
      title: "BBL Forever Young",
      subTitle: "Acne Treatment",
      imgUrl: "/img/bbl.jpeg",
    },
    {
      id: "5",
      category: "Skin",
      title: "Acne Treatment",
      subTitle: "Acne Treatment",
      imgUrl: "/img/botox.jpeg",
    },
    {
      id: "6",
      category: "Skin",
      title: "Agnes RF Microneedling",
      subTitle: "Acne Treatment",
      imgUrl: "/img/laser-resurfacing-min.jpeg",
    },
    {
      id: "7",
      category: "Skin",
      title: "Skinpen Microneedling",
      subTitle: "Acne Treatment",
      imgUrl: "/img/microneeding-min.jpeg",
    },
    {
      id: "8",
      category: "Skin",
      title: "Skin Care",
      subTitle: "Treatment",
      imgUrl: "/img/skinpen-min.jpeg",
    },
    {
      id: "9",
      category: "Skin",
      title: "Spider Vein Removal",
      subTitle: "Laser Treatments",
      imgUrl: "/img/skincare-min.jpeg",
    },
    {
      id: "10",
      category: "Skin",
      title: "Aquafirme Facial",
      subTitle: "Facial",
      imgUrl: "/img/aquafirme-facial.jpeg",
    },
    {
      id: "11",
      category: "Skin",
      title: "Laser Hair",
      subTitle: "Laser Treatment",
      imgUrl: "/img/laser-hair.jpeg",
    },
    {
      id: "12",
      category: "Skin",
      title: "Packages",
      subTitle: "Treatment",
      imgUrl: "/img/packages-min.jpeg",
    },
  ];

  const CarouselItem = ({ item }: { item: Service }): JSX.Element => (
    <div
      style={{ backgroundImage: `url(${item.imgUrl})` }}
      className="group flex mx-6 h-[400px] rounded-2xl bg-cover bg-bottom overflow-hidden"
    >
      <div className="flex flex-col justify-end gap-6 w-full pl-6 pb-8 text-white bg-linear-1 opacity-70 group-hover:opacity-90 group-hover:animate-slide-up">
        <span className="text-sm leading-6 font-normal">{item.category}</span>
        <div>
          <h5 className="text-white">{item.title}</h5>
          <span className="text-base leading-8 font-normal">
            {item.subTitle}
          </span>
        </div>
        <div className="hidden group-hover:block">
          <Button
            color="secondary"
            label="Learn more"
            icon={<ArrowLongRightIcon className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
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
    <div className="bg-white py-20">
      <h3 className="mx-auto max-w-screen-xl pt-20 px-6">Our Services</h3>
      <Carousel
        responsive={responsive}
        ssr
        deviceType={""}
        arrows={false}
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
