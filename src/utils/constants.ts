export const IS_DEV =
  process.env.VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development";

export const DATABASE = IS_DEV ? "myFirstDatabase" : "authDb";

export const BASE_URL = IS_DEV
  ? "http://localhost:3000"
  : process.env.VERCEL_URL || "https://joesanchezjr.dev";

export const navigations = {
  main: [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joesanchejr",
    },
    {
      name: "GitHub",
      href: "https://www.github.com/joesanchejr",
    },
  ],
};
