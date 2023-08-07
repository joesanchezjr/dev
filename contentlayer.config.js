import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}));

export const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `experience/**/*.mdx`,
  contentType: "mdx",
  fields: {
    company: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "date",
      required: true,
    },
    endDate: {
      type: "date",
    },
    icon: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/_content",
  documentTypes: [Post, Page, Experience],
  markdown: { rehypePlugins: [highlight] },
  mdx: { rehypePlugins: [highlight] },
  fieldOptions: {
    date: {
      timezone: "America/Chicago",
    },
  },
});
