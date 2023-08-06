export const IS_DEV =
  process.env.VERCEL_ENV === "development" ||
  process.env.NODE_ENV === "development";

export const DATABASE = IS_DEV ? "myFirstDatabase" : "authDb";
