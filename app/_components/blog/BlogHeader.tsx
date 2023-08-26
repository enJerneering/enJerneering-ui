/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BlogHeader({ title, publishedAt }: Blog.BlogHeader) {
  return (
    <div className="lg:px-10 max-w-[1120px] mx-auto pb-[80px]">
      <h1 className="text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] md:text-[35px] md:leading-[50px] lg:text-[40px] lg:leading-[56px] font-bold text-center text-primary-900 mb-4">
        {title}
      </h1>
      <p className="text-base font-semibold leading-[32px] text-center text-gray-500">
        {publishedAt}
      </p>
    </div>
  );
}
