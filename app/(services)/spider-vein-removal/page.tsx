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

const service = "Spider Vein Removal";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Vein Treatment in ${location}`,
  description:
    "Rid spider veins effortlessly at ReVitalize Med Spa in Muncie, IN, with our non-invasive treatment for lasting results.",
};

const headerImage = "/img/vein-removal-min.jpeg";
const headerSubtitle = "Rediscover the Beauty of Vein-Free Legs with our Leading Spider Vein Treatment in Muncie, IN";

const headerFeatures: Feature[] = [
  {
    id: "1",
    title: "State-of-the-Art Technology",
    description:
      "Harness the power of cutting-edge laser technology to erase spider veins permanently.",
  },
  {
    id: "2",
    title: "FDA-Approved Methods",
    description:
      "Rest easy knowing our spider vein treatments are FDA-approved, offering maximum safety and efficacy.",
  },
  {
    id: "3",
    title: "Minimal Downtime",
    description:
      "Get back to your routine instantly, thanks to our swift, non-invasive procedure.",
  },
  {
    id: "4",
    title: "Custom Treatment Plans",
    description:
      "Receive a tailored spider vein treatment plan, designed to cater to your unique needs and ensure optimal results.",
  },
];

const serviceFeatures: Feature[] = [
  {
    id: "1",
    title: "Precision-Targeted Therapy",
    description:
      "Our lasers pinpoint only the problem veins, preserving the surrounding skin tissue.",
  },
  {
    id: "2",
    title: "20-Minute Treatments",
    description:
      "Achieve striking improvements in as little as 20 minutes, designed to fit into your busy lifestyle.",
  },
  {
    id: "3",
    title: "Confidence-Boosting Results",
    description:
      "Step out with newfound confidence as your skin turns smoother, more even-toned, and free of spider veins.",
  },
  {
    id: "4",
    title: "Virtually Painless",
    description:
      "Benefit from a virtually pain-free experience, thanks to our topical anesthetics and cooling technology.",
  },
  {
    id: "5",
    title: "Lasting Impact",
    description:
      "Enjoy the luxury of durable results that keep your skin flawlessly clear for years.",
  },
  {
    id: "6",
    title: "Certified Skincare Experts",
    description:
      "Trust your skin to our highly trained and certified skincare professionals for best-in-class treatment.",
  },
];

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/before_after/spider-vein/Ex1-before.png",
    secondImage: "/img/before_after/spider-vein/Ex1-after.png",
  },
  {
    id: "2",
    firstImage: "/img/before_after/spider-vein/Ex2-before.png",
    secondImage: "/img/before_after/spider-vein/Ex2-after.png",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "Revitalize Med Spa transformed my life! Their spider vein removal was quick, painless, and incredibly effective. My legs have never looked better!",
    author: "Emily Johnson",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "I can`t believe the difference in my skin! The spider vein treatment at Revitalize Med Spa has revitalized not just my legs, but also my confidence. Highly recommended!",
    author: "Michael Davis",
    rate: 4.9,
  },
  {
    id: "3",
    comment:
      "From consultation to post-treatment care, the team at ReVitalize Med Spa was extraordinary. The results? Simply stunning. No more spider veins, just beautiful skin!",
    author: "Sarah Thompson",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "The professionalism at ReVitalize Med Spa is unmatched. The staff made me feel comfortable throughout my spider vein treatment, and I couldn't be happier with the results.",
    author: "Linda Williams",
    rate: 4.8,
  },
  {
    id: "5",
    comment:
      "Cutting-edge technology and expert care! I was amazed by how advanced and efficient their spider vein removal process was. Kudos to ReVitalize Med Spa!",
    author: "John Smith",
    rate: 5,
  },
  {
    id: "6",
    comment:
      "If you're on the fence about spider vein removal, don't be. I saw visible results right after my first session at ReVitalize Med Spa. I'm extremely satisfied.",
    author: "Karen Lee",
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
