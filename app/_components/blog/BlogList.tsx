/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { blogList } from "@/_constant/blog";
import Button from "../Button";

export default function BlogList() {
  const BlogComponent = (): JSX.Element => (
    <div className="mt-20 w-full h-full grid gap-10 grid-cols-1 md:grid-cols-2">
      {blogList.map((blog, index) => (
        <div
          key={index}
          className="group relative w-full h-full min-h-[380px] sm:min-h-[500px] lg:min-h-[600px] max-h-[600px] rounded-[16px] overflow-hidden cursor-pointer shadow-lg"
        >
          <Link href={blog.href}>
            <img
              className="w-full h-full object-cover"
              src={blog.backgroundImage}
              alt={`blog-image-${index + 1}`}
            />
            <div className="absolute top-[32px] left-[32px] px-3 py-0.5 rounded-md bg-primary-100 text-sm font-semibold leading-6 text-primary-700">
              FEATURED
            </div>
            <div
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                opacity: "0.7",
                background:
                  "linear-gradient(180deg, rgba(8, 20, 32, 0.00) 0%, #081420 100%)",
                mixBlendMode: "multiply",
              }}
            />
            <div className="absolute left-[32px] bottom-[32px] right-[32px] group-hover:animate-slide-up">
              <h3 className="text-[22px] leading-[33px] sm:text-[26px] sm:leading-[39px] lg:text-[32px] lg:leading-[48px] font-bold text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-base font-normal text-white mb-6">3/11/19</p>
              <div className="hidden group-hover:block">
                <Button
                  label="Learn more"
                  color="secondary"
                  icon={<ArrowRightIcon className="h-4 w-4" />}
                />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl p-6 md:py-20">
      <h1 className="font-bold text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] md:text-[35px] md:leading-[50px] lg:text-[40px] lg:leading-[56px] text-primary-900 text-center mb-4">
        Blog & Article
      </h1>
      <p className="text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-10 font-normal text-gray-500 text-center">
        Unveiling Skin Care Innovations & Treatments in Muncie, IN
      </p>
      <BlogComponent />
    </div>
  );
}
