import Header from "@components/Header";
import ServiceExplanation from "@/_components/ServiceExplanation";
import Reviews from "@components/Reviews";
import CallToAction from "@components/CallToAction";
import BeforeAfterComparison from "@components/BeforeAfterComparison";
import { Metadata } from "next";
import { services } from "@constant/gallery";
import Gallery from "@components/Gallery";
import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@/_constant/cta";

const service = "Agnes RF";
const location = "Muncie, IN";
const description = "Sculpt your features with RFA treatments that melt fat and smooth your contours.  Book now for tailored care and lasting results.";

export const metadata: Metadata = {
  title: "Agnes RF Skin Treatment | Muncie's Trusted Med Spa - ReVitalize",
  description: description,    
};


const headerImage = "/img/scarlet-srf-min.jpeg";
const headerSubtitle = description;

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Plastic Surgery Results without the Knife",
      description:
        "Achieve the lift, tightness and sculpting you have grown to expect from plastic surgery without the cutting, scars or downtime.",
    },
    {
      id: "2",
      title: "Tailored Just For You",
      description:
        "We understand that each individual's skin is unique. Our tailored treatments ensure you get the right treatment for your specific skin needs.",
    },
    {
      id: "3",
      title: "Minimal Downtime, Immediate Impact",
      description:
        "With Agnes RF, experience little to no downtime and immediate improvements. It's the perfect treatment for today's fast-paced lifestyle.",
    },
    {
      id: "4",
      title: "Trusted by Thousands",
      description:
        "Join the ever-growing list of satisfied clients who have transformed their skin and life with Agnes RF at ReVitalize Med Spa.",
    },
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Cutting-Edge RF Technology",
      description:
        "Agnes RF leverages radio frequency technology to rejuvenate your skin safely and effectively. Expect targeted, lasting results.",
    },
    {
      id: "2",
      title: "Pinpoint Precision",
      description:
        "Treat specific problem areas with the utmost precision. Agnes RF leaves the surrounding tissues untouched, focusing solely on what needs treatment.",
    },
    {
      id: "3",
      title: "360-Degree Care",
      description:
        "Our commitment to you extends beyond the treatment. From consultation to aftercare, we're with you every step of the way.",
    },
    {
      id: "4",
      title: "Seamless Recovery",
      description:
        "Our targeted treatment methodology means quicker recovery times, allowing you to return to your normal routine as soon as possible.",
    },
    {
      id: "5",
      title: "Certified Professionals",
      description:
        "Rest easy knowing that certified skincare experts conduct all our Agnes RF treatments, ensuring the highest quality care.",
    },
    {
      id: "6",
      title: "Holistic Transformation",
      description:
        "Whether it's wrinkles, acne, or sagging skin, Agnes RF is your one-stop solution for a multitude of skin challenges.",
    },
  ];
  

// You may need to provide new image paths for the before and after cases
const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/scarlet-srf-min.jpeg",
    secondImage: "/img/scarlet-srf-min.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/scarlet-srf-min.jpeg",
    secondImage: "/img/scarlet-srf-min.jpeg",
  },
  {
    id: "3",
    firstImage: "/img/scarlet-srf-min.jpeg",
    secondImage: "/img/scarlet-srf-min.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "Agnes RF has been a game-changer for me. I finally said goodbye to my stubborn acne and hello to clear, radiant skin. The team at ReVitalize Med Spa made me feel comfortable throughout the entire process.",
    author: "Sophia Williams",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "I couldn't believe how quick and pain-free the process was. My skin feels rejuvenated, and the wrinkles have noticeably softened. The treatment is worth every penny!",
    author: "John Smith",
    rate: 5,
  },
  {
    id: "3",
    comment:
      "Agnes RF is my new go-to for skin care. Minimal downtime and instant results. The team at ReVitalize Med Spa really knows what they are doing!",
    author: "Megan Brown",
    rate: 4.9,
  },
  {
    id: "4",
    comment:
      "This is a no-brainer for anyone serious about skincare. The results speak for themselves, and the experts at ReVitalize Med Spa ensure you're well taken care of.",
    author: "David Johnson",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "I've tried countless treatments, but Agnes RF stands head and shoulders above the rest. My skin feels youthful and vibrant. I couldn't be happier.",
    author: "Emily White",
    rate: 4.8,
  },
  {
    id: "6",
    comment:
      "From consultation to treatment, the experience has been top-notch. Agnes RF has given me back the confidence that comes with clear, beautiful skin.",
    author: "Sarah Taylor",
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
