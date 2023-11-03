import { MdxImage } from "@/components/mdx-image";
import clsx from "clsx";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
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

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx-components prose mt-4 dark:prose-invert ">
      <Component components={components} />
    </div>
  );
}
