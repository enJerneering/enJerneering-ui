import CallToAction from "@components/CallToAction";
import Blog from "@/_components/blog/Blog";

import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@/_constant/cta";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Exclusive Package Deals in Muncie, IN",
  description:
    "Get comprehensive skin rejuvenation with exclusive packages at ReVitalize Med Spa. Combine services for personalized skincare solutions.",
};

export default function BlogDetailPage() {
  const blog: Blog.Blog = {
    title:
      "Comprehensive Packages for a Complete Makeover - Exclusive Deals Near You in Muncie, IN",
    publishedAt: " Published on Oct 3 · 7 min read",
    imageUrl: "/img/blogs/blog-detail-3.jpeg",
    content: [
      {
        title:
          "Embrace Total Transformation: Innovative Beauty Packages at ReVitalize Med Spa",
        description:
          "Are you ready to embark on a journey of total transformation? At ReVitalize Med Spa in Muncie, IN, we present an array of innovative packages that promise not only a comprehensive aesthetic makeover but also unbeatable value.",
      },
      {
        title:
          "Farewell to Unwanted Hair: Laser Hair Removal as Your Starting Point",
        description:
          "Begin your transformation with one of our most sought-after treatments – laser hair removal. Tired of the constant cycle of shaving, waxing, or plucking? This procedure offers a lasting solution to unwanted hair, bringing you the joy of smoother skin and reduced hair growth. It's safe, effective, and the gateway to a more confident you.",
      },
      {
        title: "Crafting Complete Makeovers: Our Thoughtfully Curated Packages",
        description:
          "However, a true makeover extends beyond a single service. Our packages are meticulously curated to include an array of treatments that work synergistically to yield exceptional results. From skin rejuvenation therapies to facial enhancements, skincare solutions, and more, these packages are tailored to cater to your unique needs. Our ultimate aim? To provide you with the highest value while facilitating a holistic transformation.",
      },
      {
        title: "Your Journey to Confidence Begins Here",
        description:
          "We believe that everyone deserves to feel at ease in their own skin. Whether you're grappling with skin imperfections, seeking to revitalize your complexion, or yearning for a complete overhaul, we're here to guide you. If you're scouring for 'beauty packages near me' in Muncie, IN, your search ends here. Contact us today for a complimentary consultation, and allow us to accompany you on your path to a renewed and confident version of yourself.",
      },
    ],
    author: "Bessie Cooper",
    message:
      '“Laser hair removal at ReVitalize has been a game-changer for me. No more constant shaving or painful waxing sessions. The results are incredible, and the team made me feel comfortable throughout the process. Highly recommend their expertise!"',
  };

  return (
    <div className="w-screen h-full">
      <Blog blog={blog} />
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
    </div>
  );
}
