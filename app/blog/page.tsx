import CallToAction from "@components/CallToAction";
import BlogList from "@components/blog/BlogList";

import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@/_constant/cta";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | ReVitalize",
  description:
    "Read the latest news and updates from ReVitalize Med Spa. Stay up to date with the latest trends in the beauty industry.",
};

export default function BlogPage() {
  return (
    <div className="w-screen h-full">
      <BlogList />
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
    </div>
  );
}
