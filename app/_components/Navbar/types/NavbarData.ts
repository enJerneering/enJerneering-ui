export type NavbarData = {
  logo: string;
  menuList: NavbarMenu[];
  ctaButton: CtaButton;
  featuredData?: FeaturedData[];
  justifyContent: string;
};

export type NavbarMenu = {
  title: string;
  href: string;
  subLinks?: SubLink[];
  showFeatured?: boolean;
};

export type CtaButton = {
  label: string;
  href: string;
};

export type FeaturedData = {
  imgUrl: string;
  title: string;
  subTitle: string;
  blogUrl: string;
};

export type SubLink = {
  title: string;
  subTitle?: string;
  icon?: string;
  href: string;
  pageGroup?: string;
};