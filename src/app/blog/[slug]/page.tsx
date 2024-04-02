import { notFound } from "next/navigation"

import MdxRenderer from "@/components/mdx"

import { getAllBlogPosts, getBlogPostBySlug } from "@/utils/mdx"

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {typeof post.metadata.excerpt === "string" && post.metadata.excerpt.length > 0 && (
        <div className="prose-p:mb-0 prose-p:text-zinc-500 dark:prose-p:text-zinc-500">
          <MdxRenderer source={post.metadata.excerpt} />
          <hr className="my-5" />
        </div>
      )}
      <MdxRenderer source={post.content} />
    </>
  )
}
