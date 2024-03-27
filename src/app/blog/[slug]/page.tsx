import { notFound } from "next/navigation"
import type { Metadata } from "next"
import MdxRenderer from "@/components/mdx"
import { BASE_URL } from "@/utils/constants"
import { MdxMetadata, getBlogPosts } from "@/utils/mdx"
import { formatDate } from "@/utils/date"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const post = (await getBlogPosts()).find((post) => post.slug === params.slug)
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

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const allBlogs = await getBlogPosts()
  const post = allBlogs.find((post) => post.slug === params.slug)

  // console.log(post)

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

      <div className="prose prose-zinc dark:prose-invert">
        {typeof post.metadata.excerpt === "string" && post.metadata.excerpt.length > 0 && (
          <div className="prose-p:mb-0 prose-p:text-zinc-500 dark:prose-p:text-zinc-500">
            <MdxRenderer source={post.metadata.excerpt} />
            <hr className="my-5" />
          </div>
        )}
        <MdxRenderer source={post.content} />
      </div>
    </article>
  )
}
