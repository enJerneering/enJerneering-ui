declare namespace App {
  type SubLink = {
    title: string;
    subTitle?: string;
    icon?: string;
    href: string;
    pageGroup?: string;
  };

  type NavbarMenu = {
    title: string;
    href: string;
    subLinks?: SubLink[];
    showFeatured?: boolean;
  };

  type CtaButton = {
    label: string;
    href: string;
  };
}
