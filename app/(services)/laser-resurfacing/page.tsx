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

const service = "Laser Resurfacing";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | ReVitalize in ${location}`,
  description:
    "Achieve smoother, younger skin with advanced Laser Resurfacing at ReVitalize Med Spa. Ideal for reducing wrinkles, scars, and uneven tone.",
};


const headerImage = "/img/laser-resurfacing-min.jpeg";
const headerSubtitle =
  "Experience Age-Reversing Miracles with Laser Resurfacing at ReVitalize Med Spa—Your Skincare Sanctuary in Muncie";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Precision-Crafted Treatment Plans",
      description:
        "Each Laser Resurfacing session is meticulously designed to meet your unique skin restoration goals.",
    },
    {
      id: "2",
      title: "Master-Level Aestheticians",
      description:
        "Trust your skin with our laser specialists, who bring years of expertise to ensure a flawless experience and unmatched results.",
    },
    {
      id: "3",
      title: "Cutting-Edge Technology",
      description:
        "Utilize the latest advancements in laser technology for a treatment that's not just effective, but revolutionary.",
    },
    {
      id: "4",
      title: "Ultra-Comfort Procedures",
      description:
        "Enjoy a relaxing and comfortable spa-like experience throughout your Laser Resurfacing treatment.",
    },
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Unparalleled Skin Revitalization",
      description:
        "Eradicate fine lines, wrinkles, and scars to unveil a radiant, youthful complexion like never before.",
    },
    {
      id: "2",
      title: "Clinically Proven Safety",
      description:
        "Achieve dramatic improvements in skin aesthetics through a treatment rigorously tested for safety and efficacy.",
    },
    {
      id: "3",
      title: "Harmonized Complexion",
      description:
        "Illuminate your natural beauty with an even and balanced skin tone, free of any pigmentation anomalies.",
    },
    {
      id: "4",
      title: "Flawless Renewal",
      description:
        "Achieve transformative skin texture and clarity that erases years off your appearance.",
    },
    {
      id: "5",
      title: "Swift Recovery",
      description:
        "Reclaim your lifestyle immediately with minimally invasive treatments that have you back to your routine in no time.",
    },
    {
      id: "6",
      title: "Enduring Beauty",
      description:
        "Invest in yourself with Laser Resurfacing results that stand the test of time, prolonging your newfound youthfulness.",
    },
  ];
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/before_after/laser-resurfacing/Ex1-before.png",
    secondImage: "/img/before_after/laser-resurfacing/Ex1-after.png",
  },
  {
    id: "2",
    firstImage: "/img/before_after/laser-resurfacing/Ex2-before.png",
    secondImage: "/img/before_after/laser-resurfacing/Ex2-after.png",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "A transformative experience! ReVitalize Med Spa has rejuvenated my skin to an incredible degree. Their experts are unparalleled in their skill and kindness.",
    author: "Sarah Thompson",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "The impact on my skin is nothing short of astonishing. From consultation to the comfortable procedure, ReVitalize Med Spa exceeded all my expectations.",
    author: "Michael Johnson",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "A perfect blend of professional and caring, ReVitalize Med Spa has been pivotal in improving my skin texture and reducing visible scars. Five stars!",
    author: "Emily Davis",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "Best decision ever! Laser Resurfacing at ReVitalize Med Spa has given me newfound confidence with my smoother, more youthful skin.",
    author: "John Smith",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "This is the gold standard for skin treatment. I couldn't be happier with the long-lasting results.",
    author: "Jane Williams",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "The safety measures and care provided by ReVitalize made my Laser Resurfacing treatment a breeze. A very satisfying experience!",
    author: "Mike Lee",
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
