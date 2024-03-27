import path from "node:path"
import { readdir, readFile } from "node:fs/promises"
import matter from "gray-matter"
import { isTruthy } from "@/utils/boolean"

export type MdxMetadata = {
  title: string
  publishedAt: string
  excerpt?: string
  image?: string
}

const CONTENT_PATH = path.join(process.cwd(), "src", "content")

/**
 * Read and parse and MDX file
 */
async function readMdxFile(filePath: string) {
  try {
    const rawContent = await readFile(filePath, "utf-8") // Read the file
    return matter(rawContent, { excerpt: true }) // Return the parsed frontmatter and content
  } catch (error) {
    console.error(error)
    throw new Error("Error reading file")
  }
}

/**
 * Get all MDX files in a directory
 */
async function getAllMdxFilesInDirectory(dir: string) {
  try {
    const files = await readdir(dir) // Read all files in the directory
    const mdxFiles = files.filter((file) => path.extname(file) === ".mdx") // Filter out only the mdx files
    return mdxFiles // Return the list of mdx files
  } catch (error) {
    console.error(error)
    throw new Error("Error reading directory")
  }
}

/**
 * Get a single MDX file in a directory by slug
 */
async function getSingleMdxFileInDirectory(dir: string, slug: string) {
  try {
    const files = await readdir(dir) // Read all files in the directory
    const mdxFile = files.find((file) => path.basename(file, path.extname(file)) === slug) // Find the file with the slug
    return mdxFile // Return the mdx file
  } catch (error) {
    console.error(error)
    throw new Error("Error reading directory")
  }
}

/**
 * Get MDX data for all files in a directory
 */
async function getAllMdxData(dir: string) {
  try {
    const mdxFiles = await getAllMdxFilesInDirectory(dir) // Get all mdx files in the directory
    const mdxData = await Promise.allSettled(
      mdxFiles.map(async (file) => {
        const { data, content, excerpt } = await readMdxFile(path.join(dir, file)) // Read the file
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
 * Get MDX data for a single file in a directory by slug
 */
async function getMdxDataBySlug(dir: string, slug: string) {
  try {
    const mdxFile = await getSingleMdxFileInDirectory(dir, slug) // Get the mdx file
    if (!mdxFile) {
      return
    }
    const { data, content, excerpt } = await readMdxFile(path.join(dir, mdxFile)) // Read the file
    return { metadata: data, slug, content, excerpt } // Return the metadata, slug, content, and excerpt
  } catch (error) {
    console.error(error)
    throw new Error("Error getting MDX data by slug")
  }
}

/**
 * Get all blog posts
 */
export async function getAllBlogPosts() {
  const posts = await getAllMdxData(CONTENT_PATH)
  const sortedPosts = posts.sort((a, z) => {
    return new Date(z.metadata.publishedAt as string).getTime() - new Date(a.metadata.publishedAt as string).getTime()
  })
  return sortedPosts
}

/**
 * Get a blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const post = await getMdxDataBySlug(CONTENT_PATH, slug)
  return post
}
