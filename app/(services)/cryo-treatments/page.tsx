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

const service = "Cryo Treatments";
const location = "Muncie, IN";

export const metadata: Metadata = {
  title: `${service} | Advanced Cooling Therapy in ${location}`,
  description:
    "Discover the rejuvenating power of Cryo Treatments in Muncie. Experience cutting-edge cooling therapy for pain relief and wellness.",
};

const headerImage = "/img/cryo.jpeg";
const headerSubtitle =
  "Experience the Transformative Power of Cryo Treatments at ReVitalize Med Spa in Muncie.";

  const headerFeatures: Feature[] = [
    {
      id: "1",
      title: "Revolutionary Cold Therapy",
      description: "Experience the power of cryotherapy, a cutting-edge treatment using extremely cold temperatures for rejuvenating health and wellness."
    },
    {
      id: "2",
      title: "Celebrity-Endorsed Beauty Secret",
      description: "Join the ranks of Hollywood celebrities and sports stars in embracing cryotherapy for anti-aging, weight loss, and an active lifestyle."
    },
    {
      id: "3",
      title: "Targeted Pain Relief",
      description: "Cryotherapy offers targeted relief from muscle soreness, joint pain, and inflammation, making it a favorite among athletes and fitness enthusiasts."
    },
    {
      id: "4",
      title: "Skin Rejuvenation",
      description: "Benefit from cryo facials to reduce puffiness, improve skin tone, and diminish the appearance of wrinkles and fine lines."
    }
  ];
  

  const serviceFeatures: Feature[] = [
    {
      id: "1",
      title: "Comprehensive Wellness",
      description: "From reducing migraine severity to aiding in weight loss, cryotherapy offers a holistic approach to wellness."
    },
    {
      id: "2",
      title: "Arthritis Relief",
      description: "Experience significant relief from arthritic pain and inflammation through our whole-body cryotherapy treatments."
    },
    {
      id: "3",
      title: "Skin Health",
      description: "Effective in treating conditions like atopic dermatitis, cryotherapy improves skin health by reducing inflammation and increasing antioxidants."
    },
    {
      id: "4",
      title: "Mental Health Support",
      description: "Whole-body cryotherapy is explored as a treatment for anxiety, depression, and cognitive impairments due to its anti-inflammatory effects."
    },
    {
      id: "5",
      title: "Hair and Nail Growth",
      description: "Local cryotherapy is shown to aid in hair growth, prevent hair loss during chemotherapy, and promote healthier nails."
    }
  ];
  

  const reviews: Review[] = [
    {
      id: "1",
      comment: "Cryotherapy transformed my skin condition dramatically. After just a few sessions, my skin redness and burning decreased significantly.",
      author: "Kris Oleson",
      rate: 4.9
    },
    {
      id: "2",
      comment: "As a farmer, cryotherapy has been a game-changer for my muscle recovery and pain management. It's an integral part of my daily routine now.",
      author: "Erik Freese",
      rate: 5
    },
    {
      id: "3",
      comment: "Post weight loss, cryotherapy helped me in enhancing my skin's appearance, reducing wrinkles, and boosting my confidence.",
      author: "Debbie Norton-Johnson",
      rate: 4.8
    },
    {
      id: "4",
      comment: "Cryotherapy accelerated my recovery from sports injuries, cutting down my downtime and enhancing my performance on the field.",
      author: "Jose Villanueva",
      rate: 4.7
    },
    {
      id: "5",
      comment: "After tearing my MCL, cryotherapy was pivotal in my recovery, significantly reducing pain and speeding up the healing process.",
      author: "Anonymous Athlete",
      rate: 4.6
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
