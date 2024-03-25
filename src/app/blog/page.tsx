import Link from "next/link"

import MdxRenderer from "@/components/mdx"
import { getBlogPosts } from "@/utils/mdx"
import { formatDate } from "@/utils/date"

export default async function BlogPage() {
  const allBlogs = await getBlogPosts()

  return (
    <div className="space-y-4">
      {allBlogs.map((post) => (
        <Link key={post.slug} className="group flex flex-col" href={`/blog/${post.slug}`}>
          <div className="flex w-full flex-col border-l border-l-zinc-300 pl-4 transition-colors group-hover:border-l-indigo-500 dark:border-l-zinc-700">
            <h2 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
              {post.metadata.title}
            </h2>
            {typeof post.metadata.excerpt === "string" && (
              <div className="prose prose-p:mb-2 text-sm text-zinc-500">
                <MdxRenderer source={post.metadata.excerpt} />
                <div>
                  <time className="text-sm text-zinc-500">
                    {formatDate(post.metadata.publishedAt as string, "MMMM dd, yyyy")}
                  </time>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
