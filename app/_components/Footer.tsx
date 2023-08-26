import Image from "next/image";
import React from "react";

interface FooterProps {
  // Define any props you need here
}

const navigation = {
  revitalize: [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Make Appointment", href: "#" },
  ],
  beforeAndAfter: [
    { name: "BBL Forever Young", href: "#" },
    { name: "HALO", href: "#" },
    { name: "Laser Resurfacing", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: "/img/instagram.svg",
    },
    {
      name: "Facebook",
      href: "#",
      icon: "/img/facebook.svg",
    },
  ],
};

const Footer: React.FC<FooterProps> = (props: any) => {
  const year = new Date().getFullYear();
  const companyName = "Revitalize, Inc";

  return (
    <div>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-xl px-6 pb-8 pt-16 sm:pt-24 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-[90px]">
            <div className="space-y-8">
              <Image
                src="/img/logo.svg"
                alt="Company name"
                width={122}
                height={60}
              />
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
                      width={24}
                      height={24}
                      alt={item.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 xl:col-span-2 gap-8 xl:mt-0">
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
