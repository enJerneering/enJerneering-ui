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

const service = "Scarlet SRF";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Collagen Stimulation in ${location}`,
  description:
    "Boost skin texture and elasticity with Scarlet SRF's advanced radiofrequency at ReVitalize Med Spa in Muncie, IN.",
};


const headerImage = "/img/scarlet-srf-min.jpeg";
const headerSubtitle =
  "Elevate Your Skincare Journey with Pioneering Scarlet SRF Treatments at ReVitalize Med Spa, Muncie";

const headerFeatures: Feature[] = [
  {
    id: "1",
    title: "Revolutionary Collagen Activation",
    description:
      "Harness the cutting-edge radiofrequency technology of Scarlet SRF to ignite collagen regeneration, combating signs of aging effortlessly.",
  },
  {
    id: "2",
    title: "Zero-Surgery Beauty Transformation",
    description:
      "Experience transformative skin rejuvenation without the scalpels. Scarlet SRF is a non-surgical solution for ageless beauty.",
  },
  {
    id: "3",
    title: "Personalized Treatment Plans",
    description:
      "Our tailored treatment approach ensures optimal results catered to your unique skin needs.",
  },
  {
    id: "4",
    title: "Certified and Trained Professionals",
    description:
      "Achieve your skincare goals safely and effectively with our team of licensed experts proficient in Scarlet SRF technology."
  },
];


const serviceFeatures: Feature[] = [
  {
    id: "1",
    title: "Holistic Skin Revitalization",
    description:
      "Indulge in a transformative skincare journey as Scarlet SRF amplifies collagen production, redefining skin texture while obliterating fine lines and wrinkles.",
  },
  {
    id: "2",
    title: "Skin Lift That Defies Age",
    description:
      "Utilize the advanced radiofrequency energy of Scarlet SRF to tighten sagging skin, for a visage that's youthfully uplifted.",
  },
  {
    id: "3",
    title: "Harmonized Complexion",
    description:
      "Bid farewell to pigmentation anomalies like sunspots and age spots, as Scarlet SRF harmonizes your skin tone to perfection.",
  },
  {
    id: "4",
    title: "Minuscule Pores, Majestic Skin",
    description:
      "Elevate your beauty with collagen-boosting Scarlet SRF treatments that diminish pore size, leaving your skin remarkably smooth.",
  },
  {
    id: "5",
    title: "Erase the Traces of Acne",
    description:
      "Attain an immaculate skin texture as Scarlet SRF effectively minimizes the appearance of acne scars.",
  },
  {
    id: "6",
    title: "Freedom to Be You, Instantly",
    description:
      "Achieve life-changing results with minimal downtime, as Scarlet SRF empowers you to resume your normal routine swiftly post-treatment."
  },
];


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
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "ReVitalize Med Spa's Scarlet SRF treatment was a game-changer for me. I couldn't believe how lifted and youthful my skin looked. Truly a 5-star experience!",
    author: "Jessica Adams",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "Stellar results! The remarkable improvements in my skin texture and tone were instantly noticeable. Scarlet SRF gets my highest recommendation.",
    author: "David Wilson",
    rate: 4.9,
  },
  {
    id: "3",
    comment:
      "A sensational experience with Scarlet SRF at ReVitalize Med Spa. My skin feels tighter and smoother, and the staff was exceptionally caring and skilled.",
    author: "Sophia Roberts",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "Within weeks, my skin has transformed. It's firmer, more vibrant, and the signs of aging are reduced. I'm thoroughly impressed!",
    author: "Michael Brown",
    rate: 4.9,
  },
  {
    id: "5",
    comment:
      "I couldn't be happier with the Scarlet SRF treatment. Not only have my fine lines faded away, but my complexion is also noticeably even.",
    author: "Emily Clark",
    rate: 5,
  },
  {
    id: "6",
    comment:
      "Scarlet SRF at ReVitalize Med Spa surpassed all my expectations. Minimal downtime, maximum results. What more could you ask for?",
    author: "Sarah Miller",
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
