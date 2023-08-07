import NextImage from "next/image";
import type { ImageProps } from "next/image";

export const MdxImage = (props: ImageProps) => {
  return <NextImage {...props} />;
};
