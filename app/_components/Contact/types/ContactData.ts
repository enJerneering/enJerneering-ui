export type ContactData = {
  title: string;
  subtitle: string;
  phone?: string;
  mail?: string;
  address?: string;
  phoneLabel?: string;
  mailLabel?: string;
  addressLabel?: string;
  primaryLabel: string;
  imgUrl?: string;
  mapSrc?: string;
  socials: Social[];
};

export type Social = {
  name: string;
  icon: string;
  url: string;
};
