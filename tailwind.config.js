/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-fira-code)", ...defaultTheme.fontFamily.mono],
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        disappear: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleup: {
          "0%": { transform: "scale(0.90)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        disappear: "disappear 20s ease-in-out",
        scaleup: "scaleup 0.2s ease-out 1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
