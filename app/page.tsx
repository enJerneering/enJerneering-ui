//NOTE: tsconfig.json has custom paths configured for @lib and @components, use them
import { Metadata } from "next";
import { Header } from "enjerneering-ui-kit";
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
  mainContentType,
  mainContentData,
  serviceType,
  serviceData,
  blogType,
  blogData,
} from "./pageData";
import { CallToAction } from "enjerneering-ui-kit";
import { TeamSection } from "enjerneering-ui-kit";
import { Contact } from "enjerneering-ui-kit";
import { MainContent } from "enjerneering-ui-kit";
import { ServicesSection } from "enjerneering-ui-kit";
import { Blog } from "enjerneering-ui-kit";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function Home() {
  return (
    <div>
      <Header type={headerType} data={headerData} />
      <MainContent type={mainContentType} data={mainContentData} />
      <CallToAction type={ctaType} data={ctaData} />
      <TeamSection type={teamSectionType} data={teamSectionData} />
      <Contact type={contactType} data={contactData} />
      <ServicesSection type={serviceType} data={serviceData} />
      <Blog type={blogType} data={blogData} />
    </div>
  );
}
