export const IS_DEV =
  process.env.VERCEL_ENV === "development" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development"

export const IS_PROD =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production"

export const DATABASE = IS_DEV ? "myFirstDatabase" : "authDb"

export const BASE_URL = IS_PROD
  ? "https://www.joesanchezjr.dev"
  : IS_DEV
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}` || "https://joesanchezjr.dev"

