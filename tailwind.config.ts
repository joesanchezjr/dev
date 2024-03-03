import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: [
        ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        {
          fontFeatureSettings: '"case", "zero", "ss01", "ss02", "ss03"',
        },
      ],
      serif: ["var(--font-newsreader)", ...defaultTheme.fontFamily.serif],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
