import path from "node:path"
import { readdir, readFile } from "node:fs/promises"
import matter from "gray-matter"
import { isTruthy } from "@/utils/boolean"
import { notFound } from "next/navigation"

import { cache } from "react"

export type MdxMetadata = {
  title: string
  publishedAt: string
  excerpt?: string
  image?: string
}

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "content")

/**
 * Get all blog posts
 * using cache so that we can use the data without making multiple requests
 */
export const getAllBlogPosts = cache(async () => {
  let markdownFiles

  try {
    markdownFiles = await readdir(POSTS_DIRECTORY) // Read all files in the directory
  } catch (error) {
    console.error(error)
    throw new Error("Error reading directory")
  }

  try {
    const posts = markdownFiles.filter((file) => [".mdx", ".md"].includes(path.extname(file))) // Filter out only the md/mdx files
    const postsWithMarkdownData = await Promise.all(
      posts.map(async (file) => {
        let postContent
        try {
          postContent = await readFile(path.join(POSTS_DIRECTORY, file), "utf-8") // Read the file
        } catch (error) {
          notFound()
        }
        const { data, content, excerpt } = matter(postContent, { excerpt: true }) // Return the parsed frontmatter and content
        const slug = path.basename(file, path.extname(file)) // Get the slug
        return { metadata: data, slug, content, excerpt } // Return the metadata, slug, content, and excerpt
      }),
    )

    const filteredAndSortedPosts = postsWithMarkdownData.filter(isTruthy).sort((a, z) => {
      return new Date(z.metadata.publishedAt as string).getTime() - new Date(a.metadata.publishedAt as string).getTime()
    })

    return filteredAndSortedPosts
  } catch (error) {
    console.error(error)
    notFound()
  }
})

/**
 * Get a blog post by slug
 * getAllBlogPosts is already cached, so it's safe to use here without worrying about multiple reads of the filesystem
 */
export const getBlogPostBySlug = async (slug: string) => {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug)
}
