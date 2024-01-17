import { HeaderData } from "@components/Header/types/HeaderData";
import { Metadata } from "next";
import {
  FeaturedData,
  NavbarData,
} from "./_components/Navbar/types/NavbarData";
import { FooterData } from "./_components/Footer/types/FooterData";
import { TeamSectionData } from "./_components/TeamSection/types/TeamSectionData";
import { ContactData } from "./_components/Contact/types/ContactData";
import { mapSrc } from "./_constant/app";
import { MainContentData } from "./_components/MainContent/types/MainContentData";
import { ServicesSectionData } from "./_components/ServicesSection/types/ServicesSectionData";

// Search Engine Optimization
export const seo: Metadata = {
  title: "enJerneering UI Kit",
  description: "A collection of React components for enJerneering projects",
  keywords: "enJerneering, React, UI Kit, Components, NextJS",
};

export const year = new Date().getFullYear();
export const companyName = "enJerneering";

// Header
export const headerType = 3;
export const headerData: HeaderData = {
  title: "enJerneering UI Kit",
  subtitle: "A collection of React components for enJerneering projects",
  primaryLabel: "Get Started",
  secondaryLabel: "Live Demo",
  tagLine: "enJerneering - Innovate Beyond",
  primaryUrl: "/",
  secondaryUrl: "/",
  imgUrl: "/img/cryo.jpeg",
  videoUrl: "/videos/laser-resurfacing.mp4",
  isRowReverse: false,
};

//Navbar
export const navbarType = 3;
export const navbarData: NavbarData = {
  logo: "/img/enJerneering_black.png",
  menuList: [
    {
      title: "Link 1",
      href: "#",
    },
    {
      title: "Link 2",
      href: "#",
      subLinks: [
        {
          title: "Page 1",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 1",
        },
        {
          title: "Page 2",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 1",
        },
        {
          title: "Page 3",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 1",
        },
        {
          title: "Page 4",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 2",
        },
        {
          title: "Page 5",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 2",
        },
        {
          title: "Page 6",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 3",
        },
        {
          title: "Page 7",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 3",
        },
        {
          title: "Page 8",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 4",
        },
        {
          title: "Page 9",
          subTitle: "Lorem ipsum dolor sit amet consectetur.",
          icon: "pi-home",
          href: "/",
          pageGroup: "Page group 4",
        },
      ],
      showFeatured: false,
    },
    {
      title: "Link 3",
      href: "#",
    },
    {
      title: "Link 4",
      href: "#",
    },
    {
      title: "Link 5",
      href: "#",
    },
    {
      title: "Link 6",
      href: "#",
    },
  ],
  ctaButton: {
    label: "Get Started",
    href: "/",
  },
  featuredData: [
    {
      imgUrl: "/img/cryo.jpeg",
      title: "Blog Title",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent  quam quam. ",
      blogUrl: "/",
    },
    {
      imgUrl: "/img/cryo.jpeg",
      title: "Blog Title",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent  quam quam. ",
      blogUrl: "/",
    },
  ],
  justifyContent: "center",
};

// Call to action
export const ctaType = 1;

export const ctaData: HeaderData = {
  title: "Medium length CTA goes here",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent quam quam.",
  primaryLabel: "Get Started",
  secondaryLabel: "Live Demo",
  tagLine: "enJerneering - Innovate Beyond",
  primaryUrl: "/",
  secondaryUrl: "/",
  imgUrl: "/img/bg-contact.png",
  isRowReverse: false,
};

// Footer

export const footerType = 3;

export const footerData: FooterData = {
  logo: "/img/enJerneering_black.png",
  slogan:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada.",
  socials: [
    {
      name: "linkedin",
      url: "/",
      icon: "pi-linkedin",
    },
    {
      name: "github",
      url: "/",
      icon: "pi-github",
    },
    {
      name: "instagram",
      url: "/",
      icon: "pi-instagram",
    },
    {
      name: "facebook",
      url: "/",
      icon: "pi-facebook",
    },
  ],
  navigation: [
    {
      title: "Page 1",
      href: "/",
      pageGroup: "Page group 1",
    },
    {
      title: "Page 2",
      href: "/",
      pageGroup: "Page group 1",
    },
    {
      title: "Page 3",
      href: "/",
      pageGroup: "Page group 1",
    },
    {
      title: "Page 4",
      href: "/",
      pageGroup: "Page group 2",
    },
    {
      title: "Page 5",
      href: "/",
      pageGroup: "Page group 2",
    },
    {
      title: "Page 6",
      href: "/",
      pageGroup: "Page group 3",
    },
    {
      title: "Page 7",
      href: "/",
      pageGroup: "Page group 3",
    },
  ],
  polices: [
    { title: "Privacy Policy", url: "/" },
    { title: "Terms & Conditions", url: "/" },
    { title: "Legal Information", url: "/" },
  ],
  ctaButtonLabel: "Submit",
  ctaButtonUrl: "/",
};

// Team Section
export const teamSectionType = 3;

export const teamSectionData: TeamSectionData = {
  description:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada.",
  people: [
    {
      name: "Emma Dorsey",
      role: "Senior Developer",
      imageUrl: "/img/team.png",
      bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora.",
      socials: [
        {
          name: "linkedin",
          url: "/",
          icon: "pi-linkedin",
        },
        {
          name: "github",
          url: "/",
          icon: "pi-github",
        },
        {
          name: "instagram",
          url: "/",
          icon: "pi-instagram",
        },
        {
          name: "facebook",
          url: "/",
          icon: "pi-facebook",
        },
      ],
    },
    {
      name: "Emma Dorsey",
      role: "Senior Developer",
      imageUrl: "/img/team.png",
      bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora.",
      socials: [
        {
          name: "linkedin",
          url: "/",
          icon: "pi-linkedin",
        },
        {
          name: "github",
          url: "/",
          icon: "pi-github",
        },
        {
          name: "instagram",
          url: "/",
          icon: "pi-instagram",
        },
        {
          name: "facebook",
          url: "/",
          icon: "pi-facebook",
        },
      ],
    },
    {
      name: "Emma Dorsey",
      role: "Senior Developer",
      imageUrl: "/img/team.png",
      bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora.",
      socials: [
        {
          name: "linkedin",
          url: "/",
          icon: "pi-linkedin",
        },
        {
          name: "github",
          url: "/",
          icon: "pi-github",
        },
        {
          name: "instagram",
          url: "/",
          icon: "pi-instagram",
        },
        {
          name: "facebook",
          url: "/",
          icon: "pi-facebook",
        },
      ],
    },
    {
      name: "Emma Dorsey",
      role: "Senior Developer",
      imageUrl: "/img/team.png",
      bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora.",
      socials: [
        {
          name: "linkedin",
          url: "/",
          icon: "pi-linkedin",
        },
        {
          name: "github",
          url: "/",
          icon: "pi-github",
        },
        {
          name: "instagram",
          url: "/",
          icon: "pi-instagram",
        },
        {
          name: "facebook",
          url: "/",
          icon: "pi-facebook",
        },
      ],
    },
  ],
};

// Contact

export const contactType = 5;
export const contactData: ContactData = {
  title: "Contact Us",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada.",
  phone: "+123456789",
  mail: "contact@enjerneering.com",
  address: "5333 Avenue Casgrain #1201 Montréal, QC H2T 1X3",
  phoneLabel: "Lorem ipsum dolor sit amet consectetur.",
  mailLabel: "Lorem ipsum dolor sit amet consectetur.",
  addressLabel: "Lorem ipsum dolor sit amet consectetur.",
  primaryLabel: "Send message",
  imgUrl: "/img/bg-contact.png",
  mapSrc: mapSrc,
};

// Main Content

export const mainContentType = 1;
export const mainContentData: MainContentData = {
  title: "Medium length hero heading goes here",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent ullamcorper quam quam. ",
  tagLine: "enJerneering - Innovate Beyond",
  imgUrl: "/img/bg-contact.png",
  subHeading: [
    {
      title: "Subheading 1",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      title: "Subheading 2",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      title: "Subheading 3",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      title: "Subheading 4",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
    {
      title: "Subheading 5",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    },
  ],
  gallery: [
    "/img/blogs/blog-1.jpeg",
    "/img/blogs/blog-2.jpeg",
    "/img/blogs/blog-3.jpeg",
    "/img/blogs/blog-4.jpeg",
    "/img/blogs/blog-detail-1.jpeg",
    "/img/blogs/blog-detail-2.jpeg",
  ],
  videoUrl: "/videos/laser-resurfacing.mp4",
};

// Servives
export const serviceType = 3;
export const serviceData: ServicesSectionData = {
  title: "Medium length hero heading goes here",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent ullamcorper quam quam. ",
  tagLine: "enJerneering - Innovate Beyond",
  subHeading: [
    {
      title: "Subheading 1",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-1.jpeg",
    },
    {
      title: "Subheading 2",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-2.jpeg",
    },
    {
      title: "Subheading 3",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-3.jpeg",
    },
    {
      title: "Subheading 4",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-4.jpeg",
    },
    {
      title: "Subheading 5",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-detail-1.jpeg",
    },
    {
      title: "Subheading 6",
      subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      imageExtra: "/img/blogs/blog-detail-2.jpeg",
    },
  ],
};
