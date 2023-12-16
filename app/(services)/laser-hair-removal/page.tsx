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

const service = "Laser Hair Removal";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `Professional ${service} in ${location}`,
  description:
    `Get effective Laser Hair Removal at ReVitalize Med Spa in ${location} for precise, long-term results.`
};


const headerImage = "/img/laser-hair.jpeg";
const headerSubtitle = "Experience Lasting Freedom from Unwanted Hair at ReVitalize Med Spa, Muncie";

const headerFeatures: Feature[] = [
  {
    id: "1",
    title: "Tailored Solutions",
    description: "Personalized Laser Hair Removal plans uniquely designed for your hair and skin type.",
  },
  {
    id: "2",
    title: "Expert Staff",
    description: "Trust our certified professionals to deliver top-tier Laser Hair Removal treatments with utmost precision.",
  },
  {
    id: "3",
    title: "Advanced Technology",
    description: "Benefit from our cutting-edge laser technology that guarantees accurate and safe hair removal.",
  },
  {
    id: "4",
    title: "Comfort First",
    description: "Enjoy a seamless experience with minimized discomfort and maximized satisfaction.",
  },
];

const serviceFeatures: Feature[] = [
  {
    id: "1",
    title: "Exceptional Efficacy",
    description: "Embrace a transformative solution for eradicating undesired hair across multiple body areas.",
  },
  {
    id: "2",
    title: "Sustainable Outcomes",
    description: "Achieve enduring hair reduction, simplifying your beauty routine for years to come.",
  },
  {
    id: "3",
    title: "Precision-Centric",
    description: "Rely on our meticulous laser technique to destroy hair follicles without affecting the adjacent skin.",
  },
  {
    id: "4",
    title: "Time-Saving Sessions",
    description: "Opt for quick treatments that allow you to get back to your life without any downtime.",
  },
  {
    id: "5",
    title: "Universal Compatibility",
    description: "Experience effective hair removal across a wide range of skin types and complexions.",
  },
  {
    id: "6",
    title: "Holistic Client Care",
    description: "Receive one-on-one consultations and continuous support throughout your Laser Hair Removal process.",
  },
];

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/laser-hair.jpeg",
    secondImage: "/img/laser-hair.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/laser-hair.jpeg",
    secondImage: "/img/laser-hair.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "An unparalleled experience! ReVitalize Med Spa`s Laser Hair Removal treatment has transformed my life. Efficient, comfortable, and highly effective!",
    author: "Sarah Thompson",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "Incredible results after just a few sessions! The team at ReVitalize Med Spa is both professional and welcoming. Couldn't be happier!",
    author: "Jennifer Davis",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "If you're looking to part ways with unwanted hair, ReVitalize Med Spa is the place to go. Knowledgeable staff, amazing outcomes!",
    author: "Emily Wilson",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "The comprehensive care and tailored approach at ReVitalize Med Spa have me coming back. Trustworthy and effective!",
    author: "John Smith",
    rate: 4.9,
  },
  {
    id: "5",
    comment:
      "From consultation to treatment, everything was top-notch. The lasting results speak for themselves.",
    author: "Jane Doe",
    rate: 5,
  },
  {
    id: "6",
    comment:
      "Exceptional service! Not only was the Laser Hair Removal effective but the staff made the entire process enjoyable.",
    author: "William Brown",
    rate: 4.7,
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
