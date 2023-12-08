"use server";

import { getUser, type User } from "@/app/github-user-search/octokit-rest";

enum SearchError {
  MissingInput = "missing-input",
  InvalidInput = "invalid-input",
  InvalidFormat = "invalid-format",
}

function error(error: SearchError) {
  return { error };
}

export async function search(_prevState: User | null, formData: FormData) {
  const username = formData.get("search-username");

  if (!username) {
    return error(SearchError.MissingInput);
  }

  if (typeof username !== "string") {
    return error(SearchError.InvalidInput);
  }

  return await getUser(username);
}
