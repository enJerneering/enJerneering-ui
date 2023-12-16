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

const service = "Custom Facial Treatments";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `Custom Facial Treatments | Personalized Skin Care in ${location}`,
  description:
    `Discover personalized facial treatments tailored to your skin's needs at our Med Spa in ${location}. From anti-aging to deep hydration, find your perfect skin solution with us.`,
};


const headerImage = "/img/facials.jpeg";
const headerSubtitle =
  `Reward Your Skin With Our Bespoke Facial Treatments and Unveil Your Skin's True Potential`;

  const headerFeatures: Feature[] = [
    {
      id: "custom-treatments",
      title: "Custom Treatments",
      description: "Personalized facials for every skin type, targeting your unique skin concerns.",
    },
    {
      id: "express-services",
      title: "Express Services",
      description: "Time-efficient facials for rejuvenation on the go, perfect for busy schedules.",
    },
    {
      id: "advanced-techniques",
      title: "Advanced Techniques",
      description: "Innovative skin care solutions utilizing dermaplane, enzyme peels, and cryo masks.",
    },
    {
      id: "professional-grade",
      title: "Professional Grade",
      description: "Expert application of professional-grade products for optimal skin health.",
    },
  ];
  

  const serviceFeatures: Feature[] = [
    {
      "id": "aquafirme-facial",
      "title": "Aquafirme Facial",
      "description": "Revel in our Aquafirme Facial, a concentrated burst of hydration for a luminous complexion. Experience the plush blend of Hyaluronic Acid and Marine Extracts for visibly plump and smooth skin. Perfect for a quick, radiant moisture boost with long-lasting benefits."
    },    
    {
      id: "cool-down",
      title: "Cool Down Facial",
      description:
        "A soothing facial that combines a Papain Fruit Enzyme Cleanser, Creamy Cleansing Balm, green enzyme exfoliation mask with a massage, and a Cryo Cooling Mask. Finish with HA serum, lifting eye cream, moisturizer, spf, and lip balm. Now offered at a discount with any additional service for a limited time."
    },
    {
      id: "glow-go",
      title: "Glow & Go Facial",
      description:
        "Maximize your glow in just 60 minutes with a customizable double cleanse, toner, dermaplane, bio cellulose mask with a massage, and finishing products including HA serum, lifting eye cream, moisturizer, spf, and lip balm. Perfect for those on the go."
    },
    {
      id: "express",
      title: "Express Facial",
      description:
        "Refresh and rejuvenate quickly with a 45-minute facial that includes a customizable double cleanse, toner, manual exfoliation, treat mask with a massage, and finishing products such as HA serum, lifting eye cream, moisturizer, spf, and lip balm."
    },
    {
      id: "basic",
      title: "60 Minute Custom Facial",
      description:
        "Your essential facial, personalized with a double cleanse, toner, chemical exfoliation with a massage, extract/massage, treat mask with a massage, and finishing products including HA serum, lifting eye cream, moisturizer, spf, and lip balm."
    },
    {
      "id": "basic-extended",
      "title": "90 Minute Custom Facial",
      "description": 
        "A luxurious extension of our 60-minute facial, featuring all the benefits of the custom treatment with additional time for relaxation and enhanced results."
    },
    {
      "id": "revitalization",
      "title": "Revitalization Treatment",
      "description": 
        "Our most comprehensive facial includes a double cleanse, toner, dermaplane, massage, enzyme peel with massage, treat step with massage, and the finishing products. This treatment adds two enhancements: cooling globes and an extended application of the enzyme & treat mask to the neck & décolleté."
    },    
    {
      id: "back",
      title: "Baby Got Back Treatment",
      description:
        "Focused care for your back, with a double cleanse, manual exfoliation, massage & extractions, treat mask, followed by a moisturizing treatment and sunscreen."
    },
    {
      id: "turn-back-time",
      title: "Turn Back Time",
      description:
        "Rejuvenate your skin with a treatment that targets signs of aging, including customized steps to reduce the appearance of fine lines and wrinkles for a youthful complexion."
    },
    {
      id: "acne",
      title: "Acne Facial",
      description:
        "Battle blemishes with a facial designed to address acne concerns, promoting clearer, healthier-looking skin."
    },
  ];
  
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/facials.jpeg",
    secondImage: "/img/facials.jpeg",
  },
  {
    id: "2",
    firstImage: "/img/facials.jpeg",
    secondImage: "/img/facials.jpeg",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "My skin has never felt better! The Facials is a hydration miracle. It's a must-try!",
    author: "Sarah White",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "Two words: Instant Transformation. My skin was glowing and felt tighter right after the treatment.",
    author: "David Smith",
    rate: 4.9,
  },
  {
    id: "3",
    comment:
      "Not just a treatment, but a luxurious experience. I left ReVitalize Med Spa feeling rejuvenated inside and out.",
    author: "Emily Johnson",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "I`m hooked! The results are visible and long-lasting. My skin feels and looks firmer and healthier.",
    author: "Kevin Brown",
    rate: 4.8,
  },
  {
    id: "5",
    comment:
      "Best skincare decision I've made. I felt pampered throughout the treatment and thrilled with the results.",
    author: "Laura Williams",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "Remarkable! The Facials was a relaxing experience with immediate noticeable benefits. I`m definitely coming back.",
    author: "John Davis",
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
