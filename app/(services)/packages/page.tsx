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

const service = "Packages";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `Exclusive ${service} in ${location}`,
  description:
    "Get comprehensive skin rejuvenation with exclusive packages at ReVitalize Med Spa. Combine services for personalized skincare solutions.",
};


const headerImage = "/img/packages-min.jpeg";
const headerSubtitle =
  "Unearth Holistic Skincare Transformation With Our Tailored Packages";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Bespoke Skincare Bundles",
      description:
        "Experience the ultimate skincare journey with curated packages, customized to your individual needs.",
    },
    {
      id: "2",
      title: "360° Rejuvenation",
      description:
        "Our packages are strategically designed to provide all-encompassing solutions for a total skin makeover.",
    },
    {
      id: "3",
      title: "ROI-Driven Results",
      description:
        "Get more for less. Our service packages deliver stellar and lasting results, ensuring an impressive return on your investment.",
    },
    {
      id: "4",
      title: "Expert-Crafted",
      description:
        "Designed by skincare specialists, our packages are your map to radiant, younger-looking skin.",
    },
  ];

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Your Skin, Your Plan",
      description:
        "Unlock uniquely tailored experiences designed to solve your specific skincare dilemmas.",
    },
    {
      id: "2",
      title: "Impactful Synergy",
      description:
        "Our multi-faceted packages offer synergistic benefits, amplifying your results and satisfaction.",
    },
    {
      id: "3",
      title: "Effortless Savings",
      description:
        "Benefit from the ease and savings of bundled services, while enjoying top-tier skincare solutions.",
    },
    {
      id: "4",
      title: "Masterclass in Skincare",
      description:
        "Let our seasoned experts guide you in choosing the perfect skincare cocktail for unparalleled results.",
    },
    {
      id: "5",
      title: "A Spectrum of Choices",
      description:
        "Whether you`re a skincare novice or connoisseur, we`ve got a package that fits your needs and budget.",
    },
    {
      id: "6",
      title: "Transformative Consultation",
      description:
        "Let our detailed skin analysis point you to the ideal package that targets your unique concerns.",
    },
  ];

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/packages-min.jpeg",
    secondImage: "/img/packages-min.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/packages-min.jpeg",
    secondImage: "/img/packages-min.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "Experiencing the tailored packages at ReVitalize was a game-changer for my skin. Five stars for outstanding results and customer service.",
    author: "Sarah Thompson",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "ReVitalize Med Spa`s packages are nothing short of transformative. My skin has been reborn, and the staff are exceptionally skilled.",
    author: "Michael Johnson",
    rate: 4.9,
  },
  {
    id: "3",
    comment:
      "I never knew skincare could be this effortless and effective until I tried one of ReVitalize's packages. The results are astounding!",
    author: "Emily Davis",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "I was skeptical, but the personalized bundle I got from ReVitalize delivered beyond my expectations. I`m sticking with them!",
    author: "Jackie Brown",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "The holistic approach in their packages appealed to me, but the actual results blew my mind. Worth every penny!",
    author: "Chris Evans",
    rate: 4.8,
  },
  {
    id: "6",
    comment:
      "I can't believe the comprehensive benefits I've seen from my package. It`s like having a skincare expert in my pocket.",
    author: "Michelle Lee",
    rate: 4.9,
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
