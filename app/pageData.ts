import { HeaderData } from "enjerneering-ui-kit/_components/Header/types/HeaderData";
import { Metadata } from "next";
import { NavbarData } from "enjerneering-ui-kit/_components/Navbar/types/NavbarData";
import { FooterData } from "enjerneering-ui-kit/_components/Footer/types/FooterData";
import { TeamSectionData } from "enjerneering-ui-kit/_components/TeamSection/types/TeamSectionData";
import { ContactData } from "enjerneering-ui-kit/_components/Contact/types/ContactData";
import { MainContentData } from "enjerneering-ui-kit/_components/MainContent/types/MainContentData";
import { ServicesSectionData } from "enjerneering-ui-kit/_components/ServicesSection/types/ServicesSectionData";
import { BlogData } from "enjerneering-ui-kit/_components/Blog/types/BlogData";
import { CallToActionData } from "enjerneering-ui-kit/_components/CallToAction/types/CallToActionData";

// Search Engine Optimization
export const seo: Metadata = {
  title: "enJerneering UI Kit",
  description: "A collection of React components for enJerneering projects",
  keywords: "enJerneering, React, UI Kit, Components, NextJS",
};

export const year = new Date().getFullYear();
export const companyName = "enJerneering";
export const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.674359781231!2d-85.40925552258973!3d40.21630607147254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88153d365781e4eb%3A0x90bb0a3a86aab047!2sReVitalize%20Med%20Spa!5e0!3m2!1sen!2sus!4v1694203487764!5m2!1sen!2sus";

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
  align: "left",
  isRowReverse: false,
  hasEmailAction: false,
};

//Navbar
export const navbarType: number = 3;
export const navbarTypeSubLink: number = 1;
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

// Main Content
export const mainContentType = 3;
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
  primaryLabel: "Get Started",
  secondaryLabel: "Live Demo",
};

// Call to action
export const ctaType = 3;
export const ctaData: CallToActionData = {
  title: "Medium length CTA goes here",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Et pulvinar aliquam malesuada eu praesent quam quam.",
  primaryLabel: "Get Started",
  secondaryLabel: "Live Demo",
  tagLine: "enJerneering - Innovate Beyond",
  primaryUrl: "/",
  secondaryUrl: "/",
  imgUrl: "/img/bg-contact.png",
  backgroundColor: "#262626",
  isRowReverse: false,
};

// Team Section
export const teamSectionType = 2;
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
  tagLine: "enJerneering - Innovate Beyond",
};

// Contact
export const contactType = 1;
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
};

// Servives
export const serviceType = 1;
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

// Blog
export const blogType = 1;
export const blogData: BlogData = {
  title: "Ours Blog",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Lorem ipsum dolor sit amet consectetur.",
  blogList: [
    {
      title: "Blog title heading goes here",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Lorem ipsum dolor sit amet consectetur.",
      category: "Technology",
      thumbnailUrl: "/img/blogs/blog-1.jpeg",
      publishedAt: "Jan 15, 2024",
      timeRead: "16 min",
      href: "/",
      author: {
        name: "Jerrod",
        avatarUrl: "/img/team.png",
        href: "/",
      },
    },
    {
      title: "Blog title heading goes here",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Lorem ipsum dolor sit amet consectetur.",
      category: "Technology",
      thumbnailUrl: "/img/blogs/blog-1.jpeg",
      publishedAt: "Jan 15, 2024",
      timeRead: "16 min",
      href: "/",
      author: {
        name: "Jerrod",
        avatarUrl: "/img/team.png",
        href: "/",
      },
    },
    {
      title: "Blog title heading goes here",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Nunc tincidunt pretium ut duis rhoncus. Lorem ipsum dolor sit amet consectetur.",
      category: "Technology",
      thumbnailUrl: "/img/blogs/blog-1.jpeg",
      publishedAt: "Jan 15, 2024",
      timeRead: "16 min",
      href: "/",
      author: {
        name: "Jerrod",
        avatarUrl: "/img/team.png",
        href: "/",
      },
    },
  ],
  isShowAuthor: true,
};

// Footer
export const footerType = 1;
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
  singleLinks: [
    {
      title: "Link One",
      href: "/",
    },
    {
      title: "Link Two",
      href: "/",
    },
    {
      title: "Link Three",
      href: "/",
    },
    {
      title: "Link Four",
      href: "/",
    },
    {
      title: "Link Five",
      href: "/",
    },
  ],
};
