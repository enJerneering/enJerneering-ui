export type FooterData = {
  logo: string;
  slogan: string;
  socials: Social[];
  navigation: Navigation[];
  polices: Policy[];
  ctaButtonLabel?: string;
  ctaButtonUrl?: string;
};

export type Social = {
  name: string;
  icon: string;
  url: string;
};

export type Navigation = {
  title: string;
  href: string;
  pageGroup?: string;
};

export type Policy = {
  title: string;
  url: string;
};
