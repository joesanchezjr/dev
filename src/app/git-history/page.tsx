import { getRepositoryInformation } from "@/app/git-history/octokit-rest";
import RepoSearch from "@/app/git-history/repo-search";

export default async function GitHistory() {
  const repo = await getRepositoryInformation("joesanchezjr/dev");

  return (
    <div className="max-width">
      <h1>Search GitHub</h1>
      <div className="grid grid-col-1 md:grid-cols-8 w-full">
        <div className="md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-3">
          <RepoSearch repo={repo} />
        </div>
      </div>
    </div>
  );
}
