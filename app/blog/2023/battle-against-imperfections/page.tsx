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
  title: "Winning the Battle against Skin Imperfections",
  description:
    "Are skin imperfections affecting your confidence? Embrace a brighter future for your skin in Muncie, IN, where we offer a diverse range of skincare solutions designed to rejuvenate your texture, tone, and overall appearance.",
};

export default function BlogDetailPage() {
  const blog: Blog.Blog = {
    title:
      "Winning the Battle against Imperfections - Skincare Solutions in Muncie, IN",
    publishedAt: " Published on Oct 3 · 7 min read",
    imageUrl: "/img/blogs/blog-detail-4.jpeg",
    content: [
      {
        title: "Unveil Your Best Skin: Skincare Solutions in Muncie, IN",
        description:
          "Are skin imperfections affecting your confidence? Embrace a brighter future for your skin in Muncie, IN, where we offer a diverse range of skincare solutions designed to rejuvenate your texture, tone, and overall appearance.",
      },
      {
        title: "Revolutionize Your Skin with SkinPen Microneedling",
        description:
          "Discover the transformative power of SkinPen Microneedling, a coveted service at our establishment. Through micro-injuries, this therapy triggers your body's natural wound-healing mechanisms, igniting a process of heightened collagen and elastin synthesis. The outcome? Skin that's remarkably smoother, firmer, and more toned. Bid farewell to scars, stretch marks, and wide pores, as you unveil a renewed sense of confidence.",
      },
      {
        title: "Vanquish Spider Veins: A Clearer Path to Radiant Skin",
        description:
          "Our Spider Vein Removal procedure is a revelation for those plagued by unsightly spider veins. Harnessing cutting-edge laser technology, we delicately target and eliminate spider veins without harming the surrounding skin. Say goodbye to embarrassment and welcome clear, attractive skin that speaks volumes of your newfound radiance.",
      },
      {
        title: "Comprehensive Skincare: Your Path to Health and Beauty",
        description:
          "Skincare is an intricate journey, and we're your steadfast guides. Beyond treatments, our comprehensive skincare program is meticulously tailored to nurture the health and beauty of your skin. Every step is curated to suit your unique skin type, as we recommend the ideal products and provide answers to any questions you may have.",
      },
      {
        title: "Elevate Your Skincare in Muncie, IN",
        description:
          "Embark on a journey to transform your skin imperfections into triumphs. Our doors are open, ready to welcome you to a world of confident beauty. Whether you're seeking to defy the signs of time or conquer skin concerns, our experts are here to craft a personalized approach that leads you towards your skincare aspirations. Don't hesitate – book an appointment today and witness the magic of our skincare solutions firsthand.",
      },
    ],
    author: "Bessie Cooper",
    message:
      '"The Facials at ReVitalize Med Spa was a delightful experience. My skin feels hydrated, firmer, and positively rejuvenated. The process was relaxing, and the afterglow is incredible.”',
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
