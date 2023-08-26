/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BlogBody({ imageUrl, content }: Blog.BlogBody) {
  return (
    <div className="lg:px-10 max-w-[1120px] mx-auto mb-10">
      <div className="flex gap-10 flex-col">
        <div className="w-full h-full max-h-[480px] rounded-[16px] overflow-hidden">
          <img
            className="w-full max-h-[480px] min-h-[300px] object-fill"
            src={imageUrl}
            alt="blog-detail-1"
          />
        </div>
        {content.map((content, index) => (
          <div key={index}>
            <div className="text-[18px] leading-[27px] sm:text-[20px] sm:leading-[30px] md:text-[24px] md:leading-[40px] font-bold text-primary-900 mb-4">
              {content.title}
            </div>
            <div className="text-base font-normal text-gray-500 leading-[32px] whitespace-pre-line">
              {content.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
