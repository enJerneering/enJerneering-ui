//NOTE: tsconfig.json has custom paths configured for @lib and @components, use them
import { getBaseUrl } from "@lib/meta";
import { Metadata } from "next";
import Header from "./_components/Header";
import { seo, headerType, headerData } from "./pageData";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function Home() {
  const baseUrl = getBaseUrl();

  return (
    <div>
      <Header type={headerType} data={headerData} />
    </div>
  );
}
