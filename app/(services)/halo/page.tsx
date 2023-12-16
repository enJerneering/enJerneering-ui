import Header from "@components/Header";
import ServiceExplanation from "@/_components/ServiceExplanation";
import Reviews from "@components/Reviews";
import CallToAction from "@components/CallToAction";
import BeforeAfterComparison from "@components/BeforeAfterComparison";
import { services } from "@constant/gallery";
import Gallery from "@components/Gallery";
import { Metadata } from "next";
import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@/_constant/cta";

const service = "Halo Treatment";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Hybrid Fractional Laser`,
  description: `Revive your skin with Halo Hybrid Fractional Laser treatment at ReVitalize Med Spa in ${location}, reducing fine lines and enhancing tone.`
};


const headerImage = "/img/HALO-min.jpeg";
const headerSubtitle =
  "Elevate Your Beauty with Expert Halo Treatments at ReVitalize Med Spa in Muncie, IN";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Precision-Crafted Rejuvenation",
      description:
        "Tailor-made Halo treatments designed to resonate with your unique skincare objectives.",
    },
    {
      id: "2",
      title: "Master-Level Expertise",
      description:
        "Trust in the hands of our seasoned skincare specialists for superior comfort and unmatched results.",
    },
    {
      id: "3",
      title: "Immediate & Long-Term Results",
      description:
        "Instantly witness the transformation in your skin`s tone and texture that lasts for years.",
    },
    {
      id: "4",
      title: "Cutting-Edge Technology",
      description:
        "State-of-the-art hybrid fractional laser technology that sets new standards in skin treatment.",
    },
  ];  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "High-Tech Skin Renaissance",
      description:
        "Experience a new pinnacle in skin vitality with our hybrid fractional laser tech that targets aging, dullness, and imperfections.",
    },
    {
      id: "2",
      title: "Absolute Comfort & Safety",
      description:
        "Feel at ease with our secure and pain-free Halo treatments that put your comfort at the forefront.",
    },
    {
      id: "3",
      title: "Swift Recovery, Zero Downtime",
      description:
        "Reclaim your daily routine instantly with minimal recovery time, thanks to our advanced Halo technology.",
    },
    {
      id: "4",
      title: "Dramatic Results You`ll Love",
      description:
        "Turn heads with visibly enhanced skin luminosity and texture, all achievable in just a couple of sessions.",
    },
    {
      id: "5",
      title: "100% Customized Treatments",
      description:
        "Enjoy treatments personalized to your skin type and cosmetic goals for truly exceptional outcomes.",
    },
    {
      id: "6",
      title: "Sustain Your Youthful Glow",
      description:
        "Keep the compliments coming for years with durable, long-lasting results backed by diligent skincare.",
    },
  ];
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/before_after/halo/Ex1-before.png",
    secondImage: "/img/before_after/halo/Ex1-after.png",
  },
  {
    id: "2",
    firstImage: "/img/before_after/halo/Ex2-before.png",
    secondImage: "/img/before_after/halo/Ex2-after.png",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "After my Halo treatment at ReVitalize Med Spa, I`ve received non-stop compliments! My skin looks years younger and the fine lines are nearly gone!",
    author: "Danielle Smith",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "Transformative is an understatement! Halo completely revamped my complexion. I couldn`t be happier with the amazing results.",
    author: "Amanda Johnson",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "I felt instantly rejuvenated after my Halo treatment at ReVitalize. The staff was superb and the results are truly magical.",
    author: "Rachel Williams",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "I can't believe this is my skin! One Halo treatment and I'm already looking and feeling more youthful and vibrant.",
    author: "Michael Davis",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "The tailored approach they take with the Halo treatment made all the difference. My skin is now luminous and even-toned!",
    author: "Sarah Miller",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "The Halo treatment is a game-changer! The quick recovery and lasting results have made me a lifelong client.",
    author: "Chris Johnson",
    rate: 5,
  },
];


export default function Page() {
  return (
    <div>
      <Header
        features={headerFeatures}
        imgSrc={headerImage}
        title={service + " in " + location}
        subtitle={headerSubtitle}
      />

      <ServiceExplanation
        features={serviceFeatures}
        title={service + " At a Glance"}
      />

      <BeforeAfterComparison cases={beforeAfterComparisonCases} />

      <Reviews reviews={reviews} />

      <Gallery services={services} galleryTitle={"Our Services"} />
      
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
    </div>
  );
}
