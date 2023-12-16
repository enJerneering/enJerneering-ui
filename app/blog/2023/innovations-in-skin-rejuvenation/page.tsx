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
  title: "Innovations in Skin Rejuvenation - Near You in Muncie, IN",
  description:
    "Are you tired of tirelessly searching for effective skin rejuvenation treatments in your local area? Your quest ends here at ReVitalize Med Spa in Muncie, IN. We take pride in offering an exceptional array of groundbreaking skin treatments designed to leave you with revitalized, rejuvenated, and ageless skin.",
};

export default function BlogDetailPage() {
  const blog: Blog.Blog = {
    title: "Innovations in Skin Rejuvenation - Near You in Muncie, IN",
    publishedAt: "Published on Oct 3 · 7 min read",
    imageUrl: "/img/blogs/blog-detail-1.jpeg",
    content: [
      {
        title:
          "Discover Younger-Looking Skin with ReVitalize Med Spa: Your Ultimate Rejuvenation Destination in Muncie, IN",
        description:
          "Are you tired of tirelessly searching for effective skin rejuvenation treatments in your local area? Your quest ends here at ReVitalize Med Spa in Muncie, IN. We take pride in offering an exceptional array of groundbreaking skin treatments designed to leave you with revitalized, rejuvenated, and ageless skin.",
      },
      {
        title:
          "Unveiling BBL Forever Young: Turn Back the Clock with Confidence",
        description:
          "Among our array of sought-after treatments, the BBL Forever Young stands tall as one of our most popular choices. Harnessing the power of BroadBand Light (BBL) technology, this innovative procedure targets aging symptoms and sun damage, effectively enhancing your skin's tone, texture, and overall radiance. It's the ideal solution for those who wish to keep their skin perpetually youthful.<br/> Experience the magic of the Halo treatment, another star in our lineup. This hybrid fractional laser therapy is your key to minimizing the appearance of fine lines and wrinkles, while infusing your skin with newfound vibrancy. The result? A vibrant, healthy, and youthful glow that turns heads.",
      },
      {
        title:
          "Unearth Your Best Skin with Laser Resurfacing & Scarlet SRF Therapy",
        description:
          "For those seeking a more intensive transformation, our Laser Resurfacing services offer the ultimate solution. This cutting-edge process employs laser technology to gently remove the top layer of your skin, unveiling a fresh, youthful canvas beneath. Deep lines, wrinkles, and even pesky acne scars find their match in this transformative treatment.\n Introducing the Scarlet SRF therapy, a game-changer in skin tightening. Through advanced technology, this treatment stimulates collagen production, effectively reducing sagging and enhancing your skin's firmness. Experience a renewed sense of confidence as you unveil tighter, more youthful-looking skin.",
      },
      {
        title:
          "Agnes RF Treatment: A Non-Surgical Marvel - Experience the ReVitalize Difference Today",
        description:
          "Say farewell to skin concerns like eye bags, wrinkles, and acne with our revolutionary Agnes RF treatment. Utilizing radiofrequency technology, this non-surgical procedure offers a path to smoother, more youthful skin without the need for invasive surgery. Embrace the beauty of a rejuvenated complexion without compromise.'\n If you've been searching for the pinnacle of skin rejuvenation services in Muncie, IN, your journey has reached its destination. Step into ReVitalize Med Spa for a personalized consultation, and embark on a transformative path to achieving youthful, radiant skin. We're here to redefine your skincare journey with innovation, expertise, and a commitment to your timeless beauty.",
      },
    ],
    author: "Robert Fox",
    message:
      '"ReVitalize Med Spa turned back the clock for my skin. The Facials left me glowing and confident. Their attention to individual needs is remarkable."',
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
