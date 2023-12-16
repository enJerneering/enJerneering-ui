// Import necessary components and functions
import { getBaseUrl } from "@lib/meta";
import HeroHeader from "@components/HeroHeader";
import About from "@components/About";
import CallToAction from "@components/CallToAction";
import BenefitInformation from "@components/BenefitInformation";
import Team from "@components/Team";
import Testimonials from "@components/Testimonials";
import BlogList from "@components/blog/BlogList";
import Contact from "@components/Contact";
import Gallery from "@components/Gallery";
import Reviews from "@components/Reviews";
import { Metadata } from "next";
import { services } from "@constant/gallery";
import {
    ctaBgImage,
    ctaButtonLabel,
    ctaSubtitle,
    ctaTitle,
} from "@constant/cta";

// Other imports and constants...

export const metadata: Metadata = {
    title: "ReVitalize: Muncie's Premier Med Spa",
    description:
        "Unlock immediate beauty transformations at ReVitalize, the top Med Spa in " +
        "Muncie, IN. Book now for personalized, medical-grade skincare in a serene oasis.",
};

// 12 Days of Christmas Deals
const christmasDeals = [
    {
        id: "1",
        name: "1st Day of Christmas",
        description: "Holiday Facials - Choose between ReVitalize & Relax or Aquafirme",
        features: ["Special Price: $90", "Limit one per person"],
        imageSrc: "/img/facials-alt.jpeg",
        imageAlt: "Holiday Facials"
    },
    {
        id: "2",
        name: "2nd Day of Christmas",
        description: "Holiday Face Ready - $600 to $1000 off filler packages",
        features: [
            "Chin & Jawline, Cheeks & Chin, Cheeks & Midface $1785",
            "Cheeks, Chin Jawline $2975",
            "Holiday Lips - Full syringe $600 or Half syringe $350"
        ],
        imageSrc: "/img/botox.jpeg",
        imageAlt: "Filler Packages and Holiday Lips"
    },
    {
        id: "3",
        name: "3rd Day of Christmas",
        description: "NanoLaserPeel is a perfect introduction to laser treatments for any patient interested in the newest way to get smoother, brighter skin.",
        features: ["$199 for one (limit 3)"],
        imageSrc: "/img/laser-resurfacing-min.jpeg",
        imageAlt: "NanoLaserPeel"
    },
    {
        id: "4",
        name: "4th Day of Christmas",
        description: "Who Needs Plastic Surgery when you can have a non-surgical Nip and Tuck",
        features: ["Use Agnes to chisel and form the face.", "$500 off a treatment"],
        imageSrc: "/img/microneedling-min.jpeg",
        imageAlt: "Nip and Tuck"
    },
    {
        id: "5",
        name: "5th Day of Christmas",
        description: "Keep it Cool this winter with CryoSculpting Body Contouring. Get  a jump start on your spring body.",
        features: ["33% off each package"],
        imageSrc: "/img/cryo.jpeg",
        imageAlt: "CryoSculpting"
    },
    {
        id: "6",
        name: "6th Day of Christmas",
        description: "Worried your freckles, age spots or rosacea make you look less radiant and older? With BBL™ they will be a thing of the past!",
        features: ["Buy 2 get 1 Free"],
        imageSrc: "/img/bbl.jpeg",
        imageAlt: "BBL Treatment"
    },
    {
        id: "7",
        name: "7th Day of Christmas",
        description: "Medical Grade Skin Care!!! No additives, fillers, colors or perfumes.  Only the active ingredients to treat your skin and give you the best results!!",
        features: ["Save 20% off all products"],
        imageSrc: "/img/skincare-min.jpeg",
        imageAlt: "Skin Care Products"
    },
    {
        id: "8",
        name: "8th Day of Christmas",
        description: "Botox™ - Reliable neuromodulator",
        features: [
            "$11/unit",
            "Purchase 20 units ($220) for additional unit discount",
            "Alle Flash for possible extra rewards"
        ],
        imageSrc: "/img/botox-alt.jpeg",
        imageAlt: "Botox Treatment"
    },
    {
        id: "9",
        name: "9th Day of Christmas",
        description: "All Gift Cards 15% off",
        features: ["Use for products or services", "No expiration"],
        imageSrc: "/img/gift-cards.jpeg",
        imageAlt: "Gift Cards"
    },
    {
        id: "10",
        name: "10th Day of Christmas",
        description: "Laser Hair Removal. If you want to be hair free by summer, now is the time to start!",
        features: [
            "Buy-one-get-one",
            "Series of 3 or 6 treatments",
            "Second area of equal or lesser value free"
        ],
        imageSrc: "/img/laser-hair.jpeg",
        imageAlt: "Laser Hair Removal"
    },
    {
        id: "11",
        name: "11th Day of Christmas",
        description: "Scarlet uses RadioFrequency (RF) to tighten, tone and illuminate the skin to shrink wrap you in time for the Holidays!!",
        features: ["$600 off package of 3"],
        imageSrc: "/img/scarlet-srf-min.jpeg",
        imageAlt: "Scarlet RF Treatment"
    },
    {
        id: "12",
        name: "12th Day of Christmas",
        description: "Halo eliminates years of damage by precisely targeting the right depth of pigment and fine lines. Halo restores the luminous glow you had when you were younger.",
        features: ["Buy-one-get-one 50% off"],
        imageSrc: "/img/HALO-min.jpeg",
        imageAlt: "Halo Treatment"
    },
    {
        id: "13",
        name: "13th Day of Christmas",
        description: "Buy any of the previous offers",
        features: ["Just in case you missed the one you wanted!"],
        imageSrc: "/img/christmas-all.jpeg",
        imageAlt: "Special Offer"
    }
];



export default function Home() {
    const baseUrl = getBaseUrl();

    return (
        <div className="w-screen">
            <a href="https://www.vagaro.com/revitalizemedspa" target="_blank">
                <About about={christmasDeals} />
            </a>
            <Gallery services={services} galleryTitle={"Our Services"} />
            <CallToAction
                ctaBgImage={ctaBgImage}
                ctaTitle={ctaTitle}
                ctaSubtitle={ctaSubtitle}
                ctaButtonLabel={ctaButtonLabel}
            />
            <BlogList />

            <Contact />

        </div>
    );
}
