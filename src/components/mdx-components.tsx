import { MdxImage } from "@/components/mdx-image";
import clsx from "clsx";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
  inModal?: boolean;
}

const components: MDXComponents = {
  ul: (props) => (
    <ul
      className="prose list-inside list-disc text-slate-700 dark:text-slate-300 pl-0"
      {...props}
    />
  ),
  li: (props) => <li {...props} />,
  Image: MdxImage,
  p: (props) => <p {...props} />,
  blockquote: (props) => (
    <blockquote className={clsx("font-normal", props.className)} {...props} />
  ),
};

export function Mdx({ code, inModal }: MdxProps) {
  const Component = useMDXComponent(code);
const inModalClasses= inModal ? "max-h-[57vh] overflow-y-scroll flex flex-col" : ""
  return (
    <div className={`mdx-components prose mt-4 dark:prose-invert ${inModalClasses}`}>
      <Component components={components} />
    </div>
  );
}
