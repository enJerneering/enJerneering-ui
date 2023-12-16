interface Feature {
  id: string;
  title: string;
  description: string;
}

interface Case {
  id: string;
  firstImage: string;
  secondImage: string;
}

interface Review {
  id: string;
  comment: string;
  author: string;
  rate: number;
}

interface About {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

interface Information {
  id: string;
  icon: any;
  title: string;
  description: string;
}

interface Service {
  id: string;
  category: string;
  title: string;
  subTitle: string;
  imgUrl: string;
  href: string;
}
