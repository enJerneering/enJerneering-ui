import { HeaderData } from "@components/Header/types/HeaderData";
import { Metadata } from "next";

// Search Engine Optimization
export const seo: Metadata = {
  title: "enJerneering UI Kit",
  description: "A collection of React components for enJerneering projects",
  keywords: "enJerneering, React, UI Kit, Components, NextJS",
};

// Header
export const headerType = 1;
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
  isRowReverse: false
};