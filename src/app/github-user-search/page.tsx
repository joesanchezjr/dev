import Search from "@/app/github-user-search/search";
import { getUser } from "@/app/github-user-search/octokit-rest";

export default async function GitHubUserSearch() {
  const initialUser = await getUser("joesanchezjr");

  return (
    <div className="max-width">
      <h1>Search GitHub</h1>
      <div className="grid grid-col-1 md:grid-cols-8 w-full">
        <div className="md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-3">
          <Search initialUser={initialUser} />
        </div>
      </div>
    </div>
  );
}
