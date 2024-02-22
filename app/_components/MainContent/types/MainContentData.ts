export type MainContentData = {
  title: string;
  subtitle: string;
  tagLine?: string;
  subHeading?: SubHeading[];
  imgUrl?: string;
  videoUrl?: string;
  gallery?: string[];
  primaryLabel: string;
  secondaryLabel: string;
  primaryUrl?: string;
  secondaryUrl?: string;
};

export type SubHeading = {
  title: string;
  subtitle: string;
};
