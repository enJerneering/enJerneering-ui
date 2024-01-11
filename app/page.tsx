//NOTE: tsconfig.json has custom paths configured for @lib and @components, use them
import { getBaseUrl } from "@lib/meta";
import { Metadata } from "next";
import Header from "./_components/Header";
import {
  seo,
  headerType,
  headerData,
  ctaType,
  ctaData,
  teamSectionType,
  teamSectionData,
  contactType,
  contactData,
} from "./pageData";
import CallToAction from "./_components/CallToAction";
import TeamSection from "./_components/TeamSection";
import Contact from "./_components/Contact";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function Home() {
  const baseUrl = getBaseUrl();

  return (
    <div>
      <Header type={headerType} data={headerData} />
      <CallToAction type={ctaType} data={ctaData} />
      <TeamSection type={teamSectionType} data={teamSectionData} />
      <Contact type={contactType} data={contactData} />
    </div>
  );
}
