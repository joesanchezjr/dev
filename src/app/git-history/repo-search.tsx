"use client";
import { useFormState, useFormStatus } from "react-dom";

import Repo from "@/app/git-history/repo";
import { search } from "@/app/git-history/actions";
import type { RepositoryInformation } from "@/app/git-history/octokit-rest";

function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-md bg-slate-50/10 px-3 py-2 ring-1 ring-slate-300 dark:ring-slate-700 text-sm font-semibold shadow-sm hover:bg-slate-200 dark:hover:bg-slate-50/20 aria-disabled:opacity-50"
    >
      {pending ? "Searching..." : "Search"}
    </button>
  );
}

export default function RepoSearch({ repo }: { repo: RepositoryInformation }) {
  const [state, formAction] = useFormState(search, null);

  const repoInfo = state || repo;

  return (
    <div className="@container">
      <form
        action={formAction}
        className="w-full grid grid-cols-1 @md:grid-cols-3 items-end gap-2 max-w-2xl mb-2"
      >
        <div className="col-span-1 @md:col-span-2">
          <label
            htmlFor="search"
            className="block text-sm font-medium leading-6"
          >
            Search
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white"
              placeholder="joesanchezjr/dev"
              required
            />
          </div>
        </div>
        <SearchButton />
      </form>
      {repoInfo && <Repo data={repoInfo} />}
    </div>
  );
}
