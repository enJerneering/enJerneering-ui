import Image from "next/image";
import React from "react";

interface FooterProps {
  // Define any props you need here
}

const navigation = {
  revitalize: [
    { name: "About", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    {
      name: "Make Appointment",
      href: "https://www.vagaro.com/revitalizemedspa",
    },
    { name: "Contact", href: "/contact-us"},
    { name: "Michael Thorpe, MD", href: "/michael-thorpe"}
  ],
  beforeAndAfter: [
    { name: "BBL Forever Young", href: "/bbl-forever-young" },
    { name: "HALO", href: "/halo" },
    { name: "Laser Resurfacing", href: "/laser-resurfacing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-of-service" },
  ],
  services: [
    { name: "BBL Forever Young", href: "/bbl-forever-young" },
    { name: "HALO", href: "/halo" },
    { name: "Laser Resurfacing", href: "/laser-resurfacing" },
    { name: "Scarlet SRF", href: "/scarlet-srf" },
    { name: "Agnes RF", href: "/agnes-rf" },
    { name: "Facials", href: "/facials"},
    { name: "Botox & Fillers", href: "/botox-fillers" },
    { name: "Laser Hair Removal", href: "/laser-hair-removal" },
    { name: "Skin Care", href: "/skin-care"},
    { name: "Skinpen Microneedling", href: "/skinpen-microneedling"},
    { name: "IV Therapy", href: "/iv-therapy"},
    { name: "Cryo Treatments", href: "/cryo-treatments"},
    { name: "Packages", href: "/packages"}
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/revitalize_med_spa/",
      icon: "/img/instagram.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/ReVitalizeMedSpaMuncieIndiana",
      icon: "/img/facebook.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@revitalize_medspa",
      icon: "/img/tiktok.svg",
    }
  ],
};

const Footer: React.FC<FooterProps> = (props: any) => {
  const year = new Date().getFullYear();
  const companyName = "ReVitalize Med Spa";

  return (
    <div className="z-30">
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-xl px-6 pb-8 pt-16 sm:pt-24 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-[90px]">
            <div className="flex flex-col items-center space-y-8">
              <Image
                src="/img/logo.svg"
                alt="ReVitalize Med Spa Logo"
                width={250}
                height={125}
              />
              <br />
              <p className="text-base font-normal text-gray-500">
                We combine a relaxing spa environment with medical-grade
                procedures and therapies to help you achieve your desired
                outcomes!
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 xl:col-span-2 gap-8 xl:mt-0">
              <div>
                <h3 className="uppercase text-sm font-semibold text-gray-900">
                  REVITALIZE
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.revitalize.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="uppercase text-sm font-semibold text-gray-900">
                  BEFORE & AFTER
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.beforeAndAfter.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="uppercase text-sm font-semibold text-gray-900">
                  SERVICES
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="uppercase text-sm font-semibold text-gray-900">
                  LEGAL
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-normal text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-center text-base font-normal text-gray-500">
              &copy; {year} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
