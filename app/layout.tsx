import Navbar from "@components/Navbar";
import "./globals.css";
import "primeicons/primeicons.css";
import { Roboto } from "next/font/google";
import Footer from "@components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { footerData, footerType, navbarData, navbarType } from "./pageData";

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
          <Navbar type={navbarType} data={navbarData} />
        </div>
        <main className="flex-grow mt-[86px] relative">{children}</main>
        <Footer type={footerType} data={footerData} />
      </body>
    </html>
  );
}
