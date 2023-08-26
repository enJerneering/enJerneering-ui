/* eslint-disable @next/next/no-img-element */
import React from "react";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import BlogFeatured from "./BlogFeatured";

interface BlogProps {
  blog: Blog.Blog;
}

export default function Blog({ blog }: BlogProps) {
  return (
    <div className="mx-auto max-w-7xl p-6 sm:py-20">
      <BlogHeader title={blog.title} publishedAt={blog.publishedAt} />
      <BlogBody imageUrl={blog.imageUrl} content={blog.content} />
      <BlogFeatured message={blog.message} author={blog.author} />
    </div>
  );
}
