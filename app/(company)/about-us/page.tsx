import Header from "@components/HeaderAboutUs";
import About from "@components/About";
import CallToAction from "@components/CallToAction";
import Team from "@components/Team";
import { Metadata } from "next";
import { company, location } from "@constant/app";
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
import { aboutSections } from "@constant/about";
import HeroHeader from "@components/HeroHeader";

export const metadata: Metadata = {
  title: company + " - Muncie's Skincare Oasis",
  description: "Discover personalized skincare and aesthetic solutions at ReVitalize Med Spa in Muncie, IN, for a holistic beauty uplift.",
};


const headerTitle = "Discover ReVitalize: Your Premier Med Spa Oasis";
const headerSubtitle = "Blending state-of-the-art medical treatments with a serene spa setting, we deliver personalized rejuvenation journeys. Achieve visible results and total well-being with us!";
const videoUrl = "/videos/laser-resurfacing.mp4";

export default function Page() {
  return (
    <div>
      <HeroHeader
        heroHeaderUrlVideo={videoUrl}
        heroHeaderTitle={headerTitle}
        heroHeaderSubtitle={headerSubtitle}
      />
      <About about={aboutSections} inverted={true} />
      <Team
        benefits={benefits}
        teamImage={teamImage}
        teamTitle={teamTitle}
        teamSubtitle={teamSubtitle}
        teamDescription={teamDescription}
        teamLabelButton={teamLabelButton}
      />
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
    </div>
  );
}
