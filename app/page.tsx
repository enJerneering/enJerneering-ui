//NOTE: tsconfig.json has custom paths configured for @lib and @components, use them
import { getBaseUrl } from "@lib/meta";
import HeroHeader from "@components/HeroHeader";
import About from "@components/About";
import CallToAction from "@components/CallToAction";
import BenefitInformation from "@components/BenefitInformation";
import Team from "@components/Team";
import Testimonials from "@components/Testimonials";
import BlogList from "@components/blog/BlogList";
import Contact from "@components/Contact";
import { Metadata } from "next";
import Gallery from "@components/Gallery";
import {
  benefits,
  teamDescription,
  teamImage,
  teamLabelButton,
  teamSubtitle,
  teamTitle,
} from "@constant/team";
import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@constant/cta";
import { landingSections } from "@constant/landing";
import { services } from "@constant/gallery";
import Reviews from "@components/Reviews";

export const metadata: Metadata = {
  title: "ReVitalize: Muncie's Premier Med Spa",
  description:
    "Unlock immediate beauty transformations at ReVitalize, the top Med Spa in " + 
    "Muncie, IN. Book now for personalized, medical-grade skincare in a serene oasis.",
};


const galleryTitle = "Our Services";

const heroHeaderTitle = "Let Your Inner Light Shine";
const heroHeaderSubtitle = "Experience the perfect blend of relaxation and medical innovation to rejuvenate your skin, body, and well-being. Book Now to Transform Yourself!";
const heroHeaderUrlVideo = "/videos/medical-spa-bg.mp4";

const reviews: Review[] = [
  {
    id: "1",
    comment:
      "After my Halo treatment at ReVitalize Med Spa, I`ve received non-stop compliments! My skin looks years younger and the fine lines are nearly gone!",
    author: "Danielle Smith",
    rate: 5,
  },
  {
    id: "2",
    comment:
      "Transformative is an understatement! Halo completely revamped my complexion. I couldn`t be happier with the amazing results.",
    author: "Amanda Johnson",
    rate: 4.8,
  },
  {
    id: "3",
    comment:
      "I felt instantly rejuvenated after my Halo treatment at ReVitalize. The staff was superb and the results are truly magical.",
    author: "Rachel Williams",
    rate: 5,
  },
  {
    id: "4",
    comment:
      "I can't believe this is my skin! One Halo treatment and I'm already looking and feeling more youthful and vibrant.",
    author: "Michael Davis",
    rate: 5,
  },
  {
    id: "5",
    comment:
      "The tailored approach they take with the Halo treatment made all the difference. My skin is now luminous and even-toned!",
    author: "Sarah Miller",
    rate: 4.9,
  },
  {
    id: "6",
    comment:
      "The Halo treatment is a game-changer! The quick recovery and lasting results have made me a lifelong client.",
    author: "Chris Johnson",
    rate: 5,
  },
];

export default function Home() {
  const baseUrl = getBaseUrl();

  return (
    <div className="w-screen">
      <HeroHeader
        heroHeaderUrlVideo={heroHeaderUrlVideo}
        heroHeaderTitle={heroHeaderTitle}
        heroHeaderSubtitle={heroHeaderSubtitle}
      />
      <About about={landingSections} />
      <Gallery services={services} galleryTitle={galleryTitle} />
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
      <BenefitInformation />
      <Team
        benefits={benefits}
        teamImage={teamImage}
        teamTitle={teamTitle}
        teamSubtitle={teamSubtitle}
        teamDescription={teamDescription}
        teamLabelButton={teamLabelButton}
      />
      <Testimonials />
      <Reviews reviews={reviews} />
      <BlogList />
      <Contact />
    </div>
  );
}
