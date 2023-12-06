"use server";

import {
  RepositoryInformation,
  getRepositoryInformation,
} from "@/app/git-history/octokit-rest";

export async function search(
  _prevState: RepositoryInformation | null,
  formData: FormData,
) {
  const repo = formData.get("search");

  if (typeof repo !== "string") {
    return { error: "invalid-input" };
  }
  console.log(repo.split("/"));
  if (!repo) {
    return { error: "missing-repository" };
  }
  const repoSplit = repo
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);
  if (repoSplit.length !== 2) {
    return { error: "invalid-repository-format" };
  }
  // @todo move form validation here
  return await getRepositoryInformation(repo);
}
