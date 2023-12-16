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

const service = "IV Therapy";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Essential Nutrient Infusions in ${location}`,
  description:
    "Explore the transformative benefits of IV Therapy in Muncie. Receive essential nutrients directly into your bloodstream for optimal health and wellness.",
};

const headerImage = "/img/iv-therapy.jpeg";
const headerSubtitle =
  "Discover the Power of IV Therapy at ReVitalize Med Spa in Muncie.";

const headerFeatures: Feature[] = [
  {
    id: "1",
    title: "Instant Nutrient Absorption",
    description: "Direct infusion of vital fluids, vitamins, and minerals into the bloodstream for rapid and efficient absorption, enhancing overall well-being."
  },
  {
    id: "2",
    title: "Customized Wellness Boost",
    description: "Personalized IV therapy sessions tailored to individual needs, addressing dehydration, vitamin deficiencies, and rejuvenation."
  },
  {
    id: "3",
    title: "Revitalization and Anti-Aging",
    description: "Infusions that rejuvenate the body, improve skin health, and stimulate collagen production for a youthful appearance."
  },
  {
    id: "4",
    title: "Enhanced Immune Support",
    description: "Boost your body's natural defense mechanisms with high-dose vitamin C and other essential antioxidants."
  }
];

const serviceFeatures: Feature[] = [
  {
    id: "1",
    title: "Hydration Therapy",
    description: "Replenishing fluids and electrolytes to alleviate symptoms of dehydration, fatigue, and jet lag, ideal for athletes and travelers."
  },
  {
    id: "2",
    title: "Vitamin C Therapy",
    description: "High-dose vitamin C infusions for immune support, antioxidant benefits, and overall wellness."
  },
  {
    id: "3",
    title: "Myers’ Cocktail",
    description: "A powerful blend of vitamins, minerals, and antioxidants to enhance energy, improve immunity, and relieve stress."
  },
  {
    id: "4",
    title: "Glutathione Therapy",
    description: "Infusion of glutathione, a potent antioxidant, for detoxification, liver support, and vibrant skin health."
  }
];

const reviews: Review[] = [
  {
    id: "1",
    comment: "I love this place. Professional staff and a relaxing environment. I feel energized every time!",
    author: "Anonymous Client",
    rate: 5
  },
  {
    id: "2",
    comment: "Whenever I'm feeling under the weather, IV therapy at LIV picks me right up. I usually opt for the vitamin C-packed IV.",
    author: "Regular Client",
    rate: 4.8
  },
  {
    id: "3",
    comment: "Always on point! The clinic is professional and clean, which is very important for these treatments.",
    author: "Satisfied Customer",
    rate: 4.9
  },
  {
    id: "4",
    comment: "The staff, especially Claire, are amazing. They helped me find the perfect IV treatment. I'm definitely coming back!",
    author: "Grateful Client",
    rate: 4.7
  },
  {
    id: "5",
    comment: "This place is exceptional. The IV therapy services here surpass any other center I've tried.",
    author: "Enthusiastic Patron",
    rate: 5
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
