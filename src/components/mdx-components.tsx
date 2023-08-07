import { MdxImage } from "@/components/mdx-image";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

const components: MDXComponents = {
  ul: (props) => <ul className="list-inside list-disc" {...props} />,
  li: (props) => <li className="mb-2 max-w-[65ch]" {...props} />,
  Image: MdxImage,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mt-4 space-y-4">
      <Component components={components} />
    </div>
  );
}
