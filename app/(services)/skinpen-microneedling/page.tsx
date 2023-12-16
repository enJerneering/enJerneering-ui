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

const service = "SkinPen Microneedling";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Collagen Stimulation in ${location}`,
  description:
    "Experience SkinPen Microneedling at ReVitalize Med Spa for youthful skin, improved texture, and reduced aging signs.",
};

const headerImage = "/img/skinpen-min.jpeg";
const headerSubtitle = "Achieve flawless, youthful skin with SkinPen Microneedling at ReVitalize Med Spa in Muncie, IN. Stimulate collagen, diminish wrinkles, and revitalize your complexion in one go! Book today.";

const headerFeatures: Feature[] = [
  {
    id: "1",
    title: "Natural Collagen Stimulation",
    description:
      "Awaken your skin's natural healing potential with collagen-boosting SkinPen Microneedling, your secret weapon against aging.",
  },
  {
    id: "2",
    title: "Non-Surgical & Low Risk",
    description:
      "Revitalize your skin without going under the knife. Our minimally invasive approach ensures maximum results with minimal risks.",
  },
  {
    id: "3",
    title: "Quick & Convenient",
    description:
      "With minimal downtime, you can fit this transformative treatment into even the busiest schedules.",
  },
  {
    id: "4",
    title: "Clinically Proven Results",
    description:
      "Backed by scientific research, SkinPen Microneedling is proven to deliver stunning, long-lasting results.",
  },
];


const serviceFeatures: Feature[] = [
  {
    id: "1",
    title: "Silky-Smooth Skin Texture",
    description:
      "Bid adieu to rough patches and uneven skin tone. SkinPen Microneedling activates your skin's natural collagen, resulting in a velvety smooth complexion.",
  },
  {
    id: "2",
    title: "Vanish Fine Lines & Wrinkles",
    description:
      "Turn back the clock and diminish the appearance of fine lines and wrinkles. Look as young as you feel!",
  },
  {
    id: "3",
    title: "Pore-fection Achieved",
    description:
      "Say goodbye to enlarged pores. Our treatment helps you achieve a seamless, poreless look.",
  },
  {
    id: "4",
    title: "Even-Toned Brilliance",
    description:
      "Erase sunspots and age spots for a luminous, even-toned complexion.",
  },
  {
    id: "5",
    title: "Bye-Bye, Acne Scars",
    description:
      "Redefine your skin's texture by significantly reducing the visibility of acne scars.",
  },
  {
    id: "6",
    title: "Life Doesn't Pause, Why Should You?",
    description:
      "Continue with your daily routine almost immediately after your SkinPen Microneedling treatment. No fuss, all glow.",
  },
];


const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/skinpen-min.jpeg",
    secondImage: "/img/skinpen-min.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/skinpen-min.jpeg",
    secondImage: "/img/skinpen-min.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "After my SkinPen Microneedling session at ReVitalize Med Spa, I couldn't be happier. My skin has a youthful glow, and the fine lines are barely noticeable. Exceptional service!",
    author: "Jessica Adams",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "SkinPen Microneedling has been a game-changer for me. My complexion is significantly smoother and more even-toned. A must-try treatment!",
    author: "David Wilson",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "I can't praise ReVitalize Med Spa enough. The SkinPen Microneedling treatment had immediate effects, and the staff was extremely professional and friendly. Highly recommended!",
    author: "Sophia Roberts",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "Revitalizing my skin has never been this easy and effective. Minimal downtime and maximum results. Five stars!",
    author: "Emily Clark",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "I've tried various treatments, but SkinPen Microneedling has given me the most noticeable results. My skin is rejuvenated and the pores are minimized. A big thumbs up!",
    author: "Brian Smith",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "Incredible results in no time! SkinPen Microneedling at ReVitalize Med Spa is definitely worth the investment. My skin has never looked better!",
    author: "Caroline Lee",
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
