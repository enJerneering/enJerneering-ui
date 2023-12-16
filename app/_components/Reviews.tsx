"use client";

import React from "react";
import Image from "next/image";
import Carousel, { DotProps } from "react-multi-carousel";

const responsive = {
  lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  md: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface StarType {
  src: string;
  alt: string;
  hasEmptyStar?: boolean;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = (props) => {
  const { reviews } = props;

  const renderStars = (rating: number) => {
    const starTypes: StarType[] = [
      { src: "/img/star.svg", alt: "star" },
      { src: "/img/star-half.svg", alt: "star-half" },
      { src: "/img/star-no-fill.svg", alt: "star-empty" },
    ];

    const fullStarsCount = Math.min(Math.floor(rating), 5);
    const hasHalfStar = rating - fullStarsCount >= 0.5;

    const stars: StarType[] = [];

    for (let i = 0; i < fullStarsCount; i++) {
      stars.push(starTypes[0]);
    }

    if (hasHalfStar) {
      stars.push({
        ...starTypes[1],
        hasEmptyStar: true,
      });
    }

    const remainingStars = 5 - fullStarsCount - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(starTypes[2]);
    }

    return (
      <div className="flex justify-center items-center gap-3">
        {stars.map((star, index) => (
          <div
            key={index}
            className={`w-5 h-5 object-cover ${
              star.hasEmptyStar ? "relative" : ""
            }`}
          >
            <Image
              src={star.src}
              width={20}
              height={20}
              alt={star.alt}
              style={star.hasEmptyStar ? { height: "100%" } : {}}
            />
            {star.hasEmptyStar && (
              <div className="absolute top-0 left-1.5 w-20">
                <Image
                  src={starTypes[2].src}
                  width={20}
                  height={20}
                  alt={starTypes[2].alt}
                  style={{ height: "100%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

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

  const ReviewItem = ({ item }: { item: Review }): JSX.Element => (
    <div className="flex flex-col items-center gap-10 h-full p-10 mx-5 rounded-2xl border-2 border-gray-300 bg-gray-50">
      <div className="flex flex-col flex-1 gap-5">
        {renderStars(item.rate)}
        <span className="flex-1 text-base leading-8 font-bold text-primary-900">
          “{item.comment}”
        </span>
      </div>
      <div className="text-sm font-normal leading-6 text-primary-900">
        {item.author}
      </div>
    </div>
  );

  return (
    <div className=" py-20">
      <h3 className="mx-auto max-w-screen-xl pt-20 px-6 text-center pb-10">
        What Our Clients Say
      </h3>
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
        {reviews.map((item) => (
          <ReviewItem item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
