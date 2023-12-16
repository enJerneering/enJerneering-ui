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

const service = "BBL Forever Young";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Rejuvenate Skin in ${location}`,
  description:
    "Experience advanced skin rejuvenation with BBL Forever Young. Target aging, tone, and texture in Muncie.",
};


const headerImage = "/img/bbl.jpeg";
const headerSubtitle =
  "Unlock Ageless Beauty with the BBL Forever Young Treatment at ReVitalize Med Spa in Muncie.";
  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Revolutionize Your Skin",
      description:
        "Harness the latest BroadBand Light technology to reverse aging and refresh your skin like never before.",
    },
    {
      id: "2",
      title: "Holistic Treatment",
      description:
        "Our experts in Muncie create a comprehensive treatment plan targeting not just aging but also pigmentation and redness.",
    },
    {
      id: "3",
      title: "Swift & Painless",
      description:
        "Say goodbye to long recoveries. Get back to your daily activities with zero downtime.",
    },
    {
      id: "4",
      title: "Customized Just For You",
      description:
        "Every skin type is unique. We personalize your BBL Forever Young treatment for the most effective results."
    }
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Diminish Fine Lines",
      description:
        "Our BBL Forever Young treatment is proven to reduce the appearance of fine lines and wrinkles.",
    },
    {
      id: "2",
      title: "Erase Sun Damage",
      description:
        "Efficiently tackle sun spots and discoloration to reveal clearer, more youthful skin.",
    },
    {
      id: "3",
      title: "Boost Collagen Production",
      description:
        "The light-based treatment stimulates collagen production, providing a natural-looking lift.",
    },
    {
      id: "4",
      title: "Precision Targeting",
      description:
        "Achieve pinpoint accuracy in targeting skin issues thanks to state-of-the-art BBL technology.",
    },
    {
      id: "5",
      title: "Skilled Practitioners",
      description:
        "Our certified skin experts ensure your treatment is safe, effective, and comfortable.",
    },
    {
      id: "6",
      title: "One-Stop Solution",
      description:
        "From pre-treatment consultation to post-treatment care, we offer a full-service experience."
    }
  ];
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/before_after/bbl/Ex1-before.png",
    secondImage: "/img/before_after/bbl/Ex1-after.png",
  },
  {
    id: "2",
    firstImage: "/img/before_after/bbl/Ex2-before.png",
    secondImage: "/img/before_after/bbl/Ex2-after.png",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "The BBL Forever Young treatment was a game-changer. My skin feels smoother, and I can see a definite reduction in my fine lines. Absolutely thrilled!",
    author: "Samantha Jones",
    rate: 4.9,
  },
  {
    id: "2",
    comment:
      "I never thought getting rid of sunspots could be this easy. Amazing service and an incredibly friendly team!",
    author: "Paul Johnson",
    rate: 5,
  },
  {
    id: "3",
    comment:
      "Their customized treatment plan worked wonders for my unique skin type. I couldn't be happier!",
    author: "Maria Clark",
    rate: 4.8,
  },
  {
    id: "4",
    comment:
      "The non-invasive treatment was comfortable, and the results were immediate. Highly recommend!",
    author: "Henry Smith",
    rate: 4.7,
  },
  {
    id: "5",
    comment:
      "Professional staff, personalized service, and amazing results. What more can you ask for?",
    author: "Christine Lee",
    rate: 5,
  },
  {
    id: "6",
    comment:
      "Went in with pigmentation and redness, came out with rejuvenated, glowing skin. Beyond satisfied!",
    author: "Victor Davis",
    rate: 4.9,
  }
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
