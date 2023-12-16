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
  title: "Facial Enhancements | ReVitalize Med Spa in Muncie, IN",
  description:
    "Enhance your facial features with expert facial enhancements at ReVitalize Med Spa in Muncie, IN.",
};

export default function BlogDetailPage() {
  const blog: Blog.Blog = {
    title: "Facial Enhancements - Your Local Specialists in Muncie, IN",
    publishedAt: "Published on Oct 3 · 7 min read",
    imageUrl: "/img/blogs/blog-detail-2.jpeg",
    content: [
      {
        title:
          "Unlock Your Finest Face: Expert Facial Enhancement in Muncie, IN",
        description:
          "When it comes to revealing your most confident self, look no further than our exceptional range of non-invasive facial modifications in Muncie, IN. Our specialized services are designed to empower you with the glow of self-assured beauty, allowing you to put your best face forward every single day.",
      },
      {
        title:
          "Erase Years with Botox and Fillers: The Secret to Youthful Radiance",
        description:
          "Two of our most sought-after procedures, Botox and filler treatments, hold the key to diminishing the telltale signs of aging. If you're on a quest to reduce the appearance of fine lines and wrinkles, these injectable treatments offer a formidable solution. By relaxing underlying muscles or restoring volume in targeted areas, they expertly smooth out wrinkles and bring a youthful vitality to your visage.",
      },
      {
        title: "Facials: Hydration, Firmness, and Radiance in One",
        description:
          "Introducing the Facials, a transformative experience that hydrates and firms your skin, bestowing upon you a renewed and rejuvenated countenance. This exceptional treatment amalgamates the powers of cleansing, exfoliation, extraction, hydration, and antioxidant protection, gifting you with the luminous and vibrant skin you've always dreamt of.",
      },
      {
        title: "Elevate Confidence, Defy Aging",
        description:
          "Don't let the inevitable signs of aging deter your confidence. Reclaim your radiance with our specialized facial augmentation techniques that celebrate your unique beauty. At our Muncie, IN location, we invite you to step into a world of transformation where your desires for a rejuvenated appearance come to life. Book a consultation today and let's embark on a collaborative journey to craft the look you've always envisioned.",
      },
    ],
    author: "Bessie Cooper",
    message:
      '“The expert facial enhancement I received at ReVitalize Med Spa was everything I hoped for and more. They took the time to understand my goals and created a personalized plan. The results are subtle and natural, exactly what I wanted. I feel like a better version of myself!"',
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
