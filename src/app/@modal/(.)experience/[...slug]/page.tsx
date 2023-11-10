import React from "react";
import HeadlessModal from "@/components/headless-modal";
import { allExperiences } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

interface ExperienceProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: ExperienceProps["params"]) {
  const slug = params?.slug?.join("/");
  const experience = allExperiences.find((post) => post.slugAsParams === slug);

  if (!experience) {
    null;
  }

  return experience;
}

export default async function ExperienceModal({ params }: ExperienceProps) {
  const experience = await getPostFromParams(params);

  if (!experience) {
    notFound();
  }
  return (
    <HeadlessModal>
      <h1 className="text-lg font-semibold">{experience.company}</h1>
      <span>{experience.title}</span>
      <Mdx code={experience.body.code} inModal />
    </HeadlessModal>
  );
}
