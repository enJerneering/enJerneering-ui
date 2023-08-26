/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function BlogFeatured({ message, author }: Blog.BlogFeatured) {
  return (
    <div className="lg:px-10 max-w-[1120px] mx-auto">
      <div className="flex items-center justify-center gap-[32px] flex-col p-10 rounded-[32px] bg-primary-100">
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src="/img/blogs/star-fill.svg"
              className="h-8 w-8"
              alt="star-icon"
            />
          ))}
        </div>
        <div className="max-w-[800px] text-[18px] leading-[27px] sm:text-[20px] sm:leading-[30px] md:text-[24px] md:leading-[40px] font-bold text-primary-900">
          {message}
        </div>
        <p className="text-base font-normal leading-[32px] text-primary-900">
          {author}
        </p>
      </div>
    </div>
  );
}
