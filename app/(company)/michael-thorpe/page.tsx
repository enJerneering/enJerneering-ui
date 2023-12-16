import DoctorDetail from "@components/DoctorDetail";
import CallToAction from "@components/CallToAction";
import BackgroundImage from "@components/BackgroundImage";

import {
  ctaBgImage,
  ctaButtonLabel,
  ctaSubtitle,
  ctaTitle,
} from "@/_constant/cta";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Michael Thorpe, MD | ReVitalize",
  description:
    "Dr. Michael Thorpe is a board-certified physician with over 30 years of experience. He is the founder of ReVitalize Med Spa!",
};

export default function Page() {
  return (
    <div>
      <DoctorDetail />
      <CallToAction
        ctaBgImage={ctaBgImage}
        ctaTitle={ctaTitle}
        ctaSubtitle={ctaSubtitle}
        ctaButtonLabel={ctaButtonLabel}
      />
    </div>
  );
}
