/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { People, TeamSectionData } from "./types/TeamSectionData";
import { classNames } from "@/_utils/helpers";

interface TeamSectionProps {
  data: TeamSectionData;
}

const responsive = {
  xl: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
    slidesToSlide: 3,
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

const CarouselItem = ({ person }: { person: People }): JSX.Element => (
  <li className="mx-5">
    <img
      className="aspect-[4/2] w-full rounded-2xl object-cover"
      src={person.imageUrl}
      alt=""
    />
    <h3 className="mt-4 text-base font-semibold text-neutral-800">
      {person.name}
    </h3>
    <p className="text-sm text-neutral-500">{person.role}</p>
    <p className="mt-4 text-sm text-neutral-500">{person.bio}</p>
    <ul role="list" className="mt-4 flex gap-x-2">
      {person.socials.map((social, index) => (
        <li key={index}>
          <a
            href={social.url}
            className="text-neutral-400 hover:text-neutral-500"
          >
            <span className="sr-only">{social.name}</span>
            <i className={classNames("pi text-neutral-500", social.icon)} />
          </a>
        </li>
      ))}
    </ul>
  </li>
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

const TeamSectionType4: React.FC<TeamSectionProps> = ({ data }) => {
  const { description, people, tagLine } = data;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:p-20">
        <div className="flex flex-col gap-4 w-[400px] text-left">
          <span className="text-neutral-400 text-base uppercase font-bold">
            {tagLine}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            Meet our team
          </h2>
          <p className="text-base text-neutral-500">{description}</p>
        </div>
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
          className="-mx-5 max-w-screen-xl py-10"
          customDot={<CustomDots />}
        >
          {people.map((item, index) => (
            <CarouselItem person={item} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TeamSectionType4;
