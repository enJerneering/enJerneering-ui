import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

import Header from "@components/HeaderContactUs";
import ContactForm from "@components/ContactForm";
import ApplicationForm from "@components/ApplicationForm";
import Gallery from "@components/Gallery";
import { mapSrc } from "@/_constant/app";
import { services } from "@/_constant/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ReVitalize",
  description:
    "Contact ReVitalize Med Spa for all your aesthetic needs. We offer a wide range of services to help you look and feel your best.",
};

const information: Information[] = [
  {
    id: "email",
    icon: <EnvelopeIcon className="w-10 h-10" />,
    title: "Email us:",
    description: "michaelthorpemd@gmail.com",
  },
  {
    id: "call",
    icon: <PhoneIcon className="w-10 h-10" />,
    title: "Call us:",
    description: "(765) 372-8187",
  },
  {
    id: "email",
    icon: <MapPinIcon className="w-10 h-10" />,
    title: "Address:",
    description: "1714 W Royale Dr, Muncie, IN 47304",
  },
];

const contactTitle = "Make an Appointment Now!";
const contactSubtitle = "Let us guide you on a journey of relaxation";
const contactBgImage = "/img/bg-contact.png";

const galleryTitle = "Our Services";

export default function Page() {
  return (
    <div>
      <Header information={information} mapSrc={mapSrc} />
      <Gallery services={services} galleryTitle={galleryTitle} />
      <ContactForm
        contactTitle={contactTitle}
        contactSubtitle={contactSubtitle}
        contactBgImage={contactBgImage}
      />
      <ApplicationForm />
    </div>
  );
}
