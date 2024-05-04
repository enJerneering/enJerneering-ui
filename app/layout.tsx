import { Navbar } from "enjerneering-ui-kit";
import "./globals.css";
import "primeicons/primeicons.css";
import { Roboto } from "next/font/google";
import { Footer } from "enjerneering-ui-kit";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  footerData,
  footerType,
  navbarData,
  navbarType,
  navbarTypeSubLink,
} from "./pageData";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} flex flex-col min-h-screen`}>
        <Analytics />
        <SpeedInsights />
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar
            type={navbarType}
            typeSubLink={navbarTypeSubLink}
            data={navbarData}
          />
        </div>
        <main
          className={`flex-grow relative mt-[86px] ${
            navbarType === 2 && "lg:mt-[178px]"
          }`}
        >
          {children}
        </main>
        <Footer type={footerType} data={footerData} />
      </body>
    </html>
  );
}
