export const IS_DEV =
  process.env.VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development";

export const IS_PROD = process.env.VERCEL_ENV === "production";

export const DATABASE = IS_DEV ? "myFirstDatabase" : "authDb";

export const BASE_URL = IS_PROD
  ? "https://www.joesanchezjr.dev"
  : IS_DEV
  ? "http://localhost:3000"
  : `https://${process.env.VERCEL_URL}` || "https://joesanchezjr.dev";

export const navigations = {
  main: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
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
