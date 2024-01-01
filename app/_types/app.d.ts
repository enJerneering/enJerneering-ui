declare namespace App {
  type NavbarMenu = {
    title: string;
    href: string;
  };

  type Header = {
    title: string;
    subtitle: string;
    btnPrimaryLabel: string;
    btnSecondaryLabel: string;
    tagLine?: string;
    btnPrimaryUrl?: string;
    btnSecondaryUrl?: string;
    imgUrl?: string;
    videoUrl?: string;
    isRowReverse?: boolean;
  };
}
