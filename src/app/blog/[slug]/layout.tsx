import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BASE_URL } from "@/utils/constants"
import { MdxMetadata, getAllBlogPosts, getBlogPostBySlug } from "@/utils/mdx"
import { formatDate } from "@/utils/date"

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, excerpt: description, image } = post.metadata as MdxMetadata
  const ogImage = image ? BASE_URL + image : `${BASE_URL}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function SingleBlogPage({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <header className="mb-8">
        <h2 className="text-2xl font-medium leading-tight tracking-tight">{post.metadata.title}</h2>
        <div className="mt-2">
          <time className="text-zinc-500">{formatDate(post.metadata.publishedAt as string, "MMMM dd, yyyy")}</time>
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert">{children}</div>
    </article>
  )
}
