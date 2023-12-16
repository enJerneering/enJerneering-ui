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

const service = "Botox & Fillers";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Botox and Fillers in ${location}`,
  description: `Enjoy tailored Botox and Fillers at ReVitalize Med Spa in ${location} for a youthful, radiant appearance.`
};


const headerImage = "/img/botox.jpeg";
const headerSubtitle = 
  "Rediscover Your Youthful Radiance with Botox and Fillers at ReVitalize Med Spa in Muncie";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Tailored Treatments",
      description: 
        "Our individualized approach ensures each Botox and Filler treatment is precisely suited to your needs.",
    },
    {
      id: "2",
      title: "Experienced Specialists",
      description: 
        "Trust in the expertise of our qualified professionals to achieve unparalleled results.",
    },
    {
      id: "3",
      title: "Clinically Tested",
      description:
        "Only FDA-approved materials used in our Botox and Filler procedures for assured safety.",
    },
    {
      id: "4",
      title: "State-of-the-Art Facilities",
      description: 
        "Experience the height of luxury and technology in our Muncie-based Med Spa.",
    },
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Revolutionary Non-Surgical Solutions",
      description:
        "Elevate your beauty effortlessly with our Botox and Fillers—your ultimate non-surgical route to reduce wrinkles and lines, all with the bonus of minimal recovery time.",
    },
    {
      id: "2",
      title: "Authentically You, Only Better",
      description:
        "Precision and artistry go hand-in-hand in our treatments. We administer Botox and Fillers with clinical accuracy, achieving results that naturally enhance and harmonize your facial features.",
    },
    {
      id: "3",
      title: "Turn Back Time with Anti-Aging Mastery",
      description:
        "Combat the relentless march of time effectively. Our Botox and Fillers services work like a time machine for your skin, offering you a visage that’s not just smoother and firmer, but also irresistibly youthful.",
    },
    {
      id: "4",
      title: "Trust in Our Safe and Proven Methods",
      description:
        "Safety meets efficacy here. Our Botox and Fillers treatments adhere to the highest safety standards, providing you with a risk-free route to rejuvenation and aesthetic enhancement.",
    },
    {
      id: "5",
      title: "Quick Results for the Time-Conscious Individual",
      description:
        "Short on time? No worries! Our quick and downtime-free Botox and Fillers procedures allow you to easily integrate them into your busy lifestyle and get back to your day-to-day activities immediately.",
    },
    {
      id: "6",
      title: "Beauty that Stands the Test of Time",
      description:
        "Why settle for fleeting beauty fixes? The longevity of our Botox and Fillers results turns them into a cost-effective, long-term investment for maintaining a youthful, radiant you.",
    },
  ];
  

const beforeAfterComparisonCases: Case[] = [
  {
    id: "1",
    firstImage: "/img/before_after/fillers/Ex1-before.png",
    secondImage: "/img/before_after/fillers/Ex1-after.png",
  },
];

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "I'm extremely satisfied with the Botox treatment at ReVitalize Med Spa. The procedure was quick and painless, and the results are fantastic!",
    author: "Jessica Green",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "The Fillers treatment was a great experience. The staff was professional and friendly, and I can't believe how great I look. I'll definitely be back!",
    author: "Emily Brown",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "Highly recommend ReVitalize Med Spa for Botox and Fillers. They provided me with excellent service, and the outcomes surpassed my expectations.",
    author: "Emma Davis",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "The professionals at ReVitalize are true artists! My face has never looked better.",
    author: "Sarah Williams",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "Superb experience! I was nervous at first, but the comfort and results have made me a repeat customer.",
    author: "Daniel Smith",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "Exceptional service. The staff were knowledgeable and the treatment is top-notch. 5 stars!",
    author: "Michael Johnson",
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
