import path from "node:path"
import { readdir, readFile } from "node:fs/promises"
import matter from "gray-matter"
import { isTruthy } from "@/utils/boolean"

const CONTENT_PATH = path.join(process.cwd(), "src", "content")

async function getMdxFilesInDirectory(dir: string) {
  try {
    const files = await readdir(dir) // Read all files in the directory
    const mdxFiles = files.filter((file) => path.extname(file) === ".mdx") // Filter out only the mdx files
    return mdxFiles // Return the list of mdx files
  } catch (error) {
    console.error(error)
    throw new Error("Error reading directory")
  }
}

async function readMdxFile(filePath: string) {
  try {
    const rawContent = await readFile(filePath, "utf-8") // Read the file
    return matter(rawContent, { excerpt: true }) // Return the parsed frontmatter and content
  } catch (error) {
    console.error(error)
    throw new Error("Error reading file")
  }
}

async function getMdxData(dir: string) {
  try {
    const mdxFiles = await getMdxFilesInDirectory(dir) // Get all mdx files in the directory
    const mdxData = await Promise.allSettled(
      mdxFiles.map(async (file) => {
        const { data, content, excerpt } = await readMdxFile(path.join(dir, file)) // Read the file
        const slug = path.basename(file, path.extname(file)) // Get the slug
        return { metadata: data, slug, content, excerpt } // Return the metadata, slug, and content
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

export async function getBlogPosts() {
  const posts = await getMdxData(CONTENT_PATH)
  const sortedPosts = posts.sort((a, z) => {
    return new Date(z.metadata.publishedAt as string).getTime() - new Date(a.metadata.publishedAt as string).getTime()
  })
  return sortedPosts
}
