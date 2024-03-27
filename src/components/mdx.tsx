import type { MDXComponents } from "mdx/types"
import Image, { ImageProps } from "next/image"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypeShiki from "@shikijs/rehype"
import { cn } from "@/lib/utils"

const components = {
  Image: (props) => (
    <div className="max-w-full">
      {/* eslint-disable-next-line jsx-a11y/alt-text -- should be passed as prop */}
      <Image {...(props as ImageProps)} />
    </div>
  ),
  pre: ({ className, ...props }) => (
    <pre className={cn("my-8 rounded p-4 dark:ring-1 dark:ring-zinc-800", className)} {...props} />
  ),
} satisfies MDXComponents

export default function MdxRenderer({ components: componentsOverride, ...props }: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(componentsOverride || {}) }}
      options={{
        // @ts-expect-error this is a valid option
        mdxOptions: {
          rehypePlugins: [
            [
              rehypeShiki,
              {
                theme: "github-dark-default",
              },
            ],
          ],
        },
      }}
      {...props}
    />
  )
}
