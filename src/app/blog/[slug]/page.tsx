import MdxRenderer from "@/components/mdx"
import { getBlogPosts } from "@/utils/mdx"
import { notFound } from "next/navigation"

function formatDate(date: string = "") {
  if (!date) {
    return null
  }

  const fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return fullDate
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const allBlogs = await getBlogPosts()
  const post = allBlogs.find((post) => post.slug === params.slug)

  console.log(post)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <header className="mb-8">
        <h2 className="text-2xl font-medium leading-tight tracking-tight">{post.metadata.title}</h2>
        <div className="mt-2">
          <time className="text-zinc-500">{formatDate(post.metadata.publishedAt as string)}</time>
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
