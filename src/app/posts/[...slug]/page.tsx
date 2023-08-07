import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { formatDate } from "@/utils/format-date";
import title from "title";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="post my-12">
      <header className="mb-4 border-b border-slate-300 pb-4">
        <h1 className="mb-2 text-2xl font-bold">{title(post.title)}</h1>
        {post.description && <p>{post.description}</p>}

        <time
          dateTime={post.date}
          className="flex-none py-0.5 font-mono text-xs leading-5 tracking-tight text-slate-500 md:order-2"
        >
          {formatDate(post.date, "MMMM dd, yyyy")}
        </time>
      </header>

      <Mdx code={post.body.code} />
    </article>
  );
}
