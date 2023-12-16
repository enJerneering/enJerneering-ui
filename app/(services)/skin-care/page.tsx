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
} from "@constant/cta";

const service = "Professional Skin Care";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Customized Treatments in ${location}`,
  description:
    "Attain a radiant complexion with expert Professional Skin Care at ReVitalize Med Spa, addressing your unique skin concerns.",
};

const headerImage = "/img/skincare-min.jpeg";
const headerSubtitle =
  "Unveil Radiant, Youthful Skin with Our Premium Skin Care Services in Muncie, IN";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Personalized Skin Consultations",
      description:
        "Benefit from a detailed skin analysis and personalized treatment plans designed specifically for you.",
    },
    {
      id: "2",
      title: "High-Quality Products",
      description:
        "We utilize industry-leading skin care products to ensure optimal results for your skin.",
    },
    {
      id: "3",
      title: "Advanced Techniques",
      description:
        "Our estheticians employ the latest methodologies for unparalleled skin rejuvenation.",
    },
    {
      id: "4",
      title: "Holistic Care",
      description:
        "Our holistic approach considers your overall skin health, lifestyle, and skincare goals.",
    },
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Targeted Deep Cleansing",
      description:
        "Experience the ultimate skin detox with targeted deep cleansing techniques that purify and refresh your complexion.",
    },
    {
      id: "2",
      title: "Revolutionary Exfoliation",
      description:
        "Unlock a smoother, brighter skin surface with our advanced exfoliating treatments.",
    },
    {
      id: "3",
      title: "Ultimate Hydration",
      description:
        "Quench your skin's thirst with our hydration-boosting therapies that lock in moisture and vitality.",
    },
    {
      id: "4",
      title: "Age-Defying Solutions",
      description:
        "Turn back the clock with treatments that minimize wrinkles and fine lines, offering you a youthful glow.",
    },
    {
      id: "5",
      title: "Radiance Boosters",
      description:
        "Illuminate your complexion with treatments that target dark spots and uneven skin tone for a radiant glow.",
    },
    {
      id: "6",
      title: "Tailor-Made Skincare Plans",
      description:
        "Leave with a comprehensive, custom skincare regimen that will maintain and enhance the effects of your treatment.",
    },
  ];
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/skincare-min.jpeg",
    secondImage: "/img/skincare-min.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/skincare-min.jpeg",
    secondImage: "/img/skincare-min.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "My experience at ReVitalize Med Spa has been transformative! My skin has never felt healthier or looked brighter.",
    author: "Emily Johnson",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "I've found my go-to spot for all my skin care needs. The estheticians here are wizards of skin rejuvenation.",
    author: "Michael Davis",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "Their professional skin care treatments are worth every penny. I can't recommend ReVitalize Med Spa enough!",
    author: "Sarah Thompson",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "The attention to detail is incredible. Their treatments and recommendations are always on point!",
    author: "John Smith",
    rate: 4.9,
  },
  {
    id: "5",
    comment:
      "My complexion has improved dramatically. The custom plans they provide are game-changers.",
    author: "Jane Doe",
    rate: 5,
  },
  {
    id: "6",
    comment:
      "The professional and friendly staff make every visit a rewarding experience. My skin thanks me for it!",
    author: "Lucy Williams",
    rate: 4.8,
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
