import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-1":
          "linear-gradient(180deg, rgba(8, 20, 32, 0.00) 0%, #081420 100%);",
      },
      colors: {
        primary: {
          900: "#E09D37",
          600: "#F7C343",
          400: "#FBE09D",
          100: "#FEF9EB",
        },
      },
      fontSize: {
        h3: "2.5rem",
        h4: "2rem",
      },
      lineHeight: {
        h3: "3.5rem",
        h4: "3rem",
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
