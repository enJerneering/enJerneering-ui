declare namespace Blog {
  type BlogList = {
    title: string;
    publishedAt: string;
    backgroundImage: string;
    href: string;
  };

  type BlogHeader = {
    title: string;
    publishedAt: string;
  };

  type BlogContent = {
    title: string;
    description: string;
  };

  type BlogBody = {
    imageUrl: string;
    content: BlogContent[];
  };

  type BlogFeatured = {
    message: string;
    author: string;
  };

  type Blog = BlogHeader & BlogBody & BlogFeatured;
}
