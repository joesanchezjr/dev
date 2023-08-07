import { MdxImage } from "@/components/mdx-image";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

const components: MDXComponents = {
  ul: (props) => <ul className="prose list-inside list-disc" {...props} />,
  li: (props) => <li {...props} />,
  Image: MdxImage,
  p: (props) => <p {...props} />,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx-components prose mt-4">
      <Component components={components} />
    </div>
  );
}
