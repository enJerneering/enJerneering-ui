import Navbar from "@components/Navbar";
import "./globals.css";
import "primeicons/primeicons.css";
import { Roboto } from "next/font/google";
import Footer from "@components/Footer";
import BackgroundImage from "@components/BackgroundImage"; // Assuming BackgroundImage is at @components folder
import Banner from "./_components/Banner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <Banner />
          <Navbar />
        </div>
        <div className="relative">
          <BackgroundImage
            src="/img/white-background.jpeg"
            alt="White Background"
          />
        </div>
        <main className="flex-grow mt-24 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
