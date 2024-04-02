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
 * Read and parse and MDX file
 */
async function readAndParseMdxFile(filePath: string) {
  try {
    const rawContent = await readFile(filePath, "utf-8") // Read the file
    return matter(rawContent, { excerpt: true }) // Return the parsed frontmatter and content
  } catch (error) {
    notFound()
  }
}

/**
 * Get all MDX files in a directory
 */
async function getAllMdxFilesInDirectory() {
  try {
    const files = await readdir(POSTS_DIRECTORY) // Read all files in the directory
    const mdxFiles = files.filter((file) => path.extname(file) === ".mdx") // Filter out only the mdx files
    return mdxFiles // Return the list of mdx files
  } catch (error) {
    console.error(error)
    throw new Error("Error reading directory")
  }
}

/**
 * Get MDX data for all files in a directory
 */
async function getAllMdxData() {
  try {
    const mdxFiles = await getAllMdxFilesInDirectory() // Get all mdx files in the directory
    const mdxData = await Promise.allSettled(
      mdxFiles.map(async (file) => {
        const { data, content, excerpt } = await readAndParseMdxFile(path.join(POSTS_DIRECTORY, file)) // Read the file
        const slug = path.basename(file, path.extname(file)) // Get the slug
        return { metadata: data, slug, content, excerpt } // Return the metadata, slug, content, and excerpt
      }),
    )
    return mdxData
      .map((promise) => {
        if (promise.status === "fulfilled") {
          return promise.value
        }
      })
      .filter(isTruthy) // Return the MDX data for fulfilled promises
  } catch (error) {
    console.error(error)
    throw new Error("Error getting MDX data")
  }
}

/**
 * Get MDX data for a single file by slug
 */
async function getMdxDataBySlug(slug: string) {
  try {
    const { data, content, excerpt } = await readAndParseMdxFile(path.join(POSTS_DIRECTORY, `${slug}.mdx`)) // Read the file
    return { metadata: data, slug, content, excerpt } // Return the metadata, slug, content, and excerpt
  } catch (error) {
    notFound()
  }
}

/**
 * Get all blog posts
 */
export const getAllBlogPosts = cache(async () => {
  const posts = await getAllMdxData()
  const sortedPosts = posts.sort((a, z) => {
    return new Date(z.metadata.publishedAt as string).getTime() - new Date(a.metadata.publishedAt as string).getTime()
  })
  return sortedPosts
})

/**
 * Get a blog post by slug
 */
export const getBlogPostBySlug = cache(async (slug: string) => {
  const post = await getMdxDataBySlug(slug)
  return post
})
