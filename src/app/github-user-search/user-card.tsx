import type { User } from "@/app/github-user-search/octokit-rest";

export default function UserCard({ data }: { data: User }) {
  if (data.error || !data.data) {
    let errorMesssage;
    switch (data.error) {
      case "invalid-input":
        errorMesssage = "Please enter a valid input. Expected a string";
        break;
      case "missing-repository":
        errorMesssage = "Please enter a repository";
        break;
      case "invalid-repository-format":
        errorMesssage =
          'Please enter a valid repository. It should be in the format of "username/repo"';
        break;
      case "Not Found":
        errorMesssage = "Repository not found";
        break;
      default:
        errorMesssage = "Error finding repository";
        break;
    }
    return (
      <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded space-y-4 dark:border-transparent shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="font-mono">{errorMesssage}</span>
        </div>
      </div>
    );
  }

  const user = data.data;

  const type = user.type; // "User" | "Organization"

  return (
    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-none flex flex-col">
      <div id="user-container" className="space-y-4">
        <div id="user-header" className="flex gap-4 w-full items-start">
          <a
            href={user?.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={user?.avatar_url}
              alt={`${user?.name}'s avatar`}
              className="h-24 w-24 rounded-full"
            />
          </a>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">{user?.name}</span>
              {type === "Organization" && (
                <span className="uppercase bold text-slate-400 text-xs relative -top-1 font-bold -ml-2">
                  ORG
                </span>
              )}
              <span className="font-mono text-slate-500 text-sm ">
                @{user?.login}
              </span>
            </div>

            <p>{user?.bio}</p>
          </div>
        </div>

        <div id="user-info" className="mt-2 w-full">
          {user?.location && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span>{user?.location}</span>
            </div>
          )}
          {user?.blog && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <a href={user?.blog} target="_blank" rel="noreferrer">
                {user.blog}
              </a>
            </div>
          )}
          {user?.email && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>{user.email}</span>
            </div>
          )}

          {user?.company && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <span>{user.company}</span>
            </div>
          )}

          {(user?.public_gists || user?.public_repos) && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
              {user?.public_repos ? (
                <span>{user.public_repos.toLocaleString()} public repos</span>
              ) : null}
              {user?.public_repos && user?.public_gists ? <span>•</span> : null}
              {user?.public_gists ? (
                <span>{user.public_gists.toLocaleString()} public gists</span>
              ) : null}
            </div>
          )}

          {(user?.following || user?.followers) && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              {user?.followers ? (
                <span>{user.followers.toLocaleString()} followers</span>
              ) : null}
              {user?.following && user?.followers ? <span>•</span> : null}
              {user?.following ? (
                <span>{user.following.toLocaleString()} following</span>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <a
        href={user?.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-xs underline font-bold text-slate-600 hover:text-slate-300 self-end"
      >
        View on GitHub
      </a>
    </div>
  );
}
