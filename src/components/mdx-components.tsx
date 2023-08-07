import { MdxImage } from "@/components/mdx-image";
import { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

const components: MDXComponents = {
  ul: (props) => <ul className="list-inside list-disc" {...props} />,
  li: (props) => <li className="prose" {...props} />,
  Image: MdxImage,
  p: (props) => <p className="prose" {...props} />,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx-components mt-4">
      <article className="prose">
        <Component components={components} />
      </article>
    </div>
  );
}
