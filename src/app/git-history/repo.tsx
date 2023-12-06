import type { RepositoryInformation } from "@/app/git-history/octokit-rest";

export default function Repo({ data }: { data: RepositoryInformation }) {
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

  const repo = data.data;

  return (
    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded space-y-4 dark:border-transparent shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <span className="font-mono">{repo?.full_name}</span>
        <a
          href={repo?.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-xs underline font-bold text-slate-600 hover:text-slate-300"
        >
          View on GitHub
        </a>
      </div>
      <div>
        <p>{repo?.description}</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-yellow-500"
                viewBox="0 0 576 512"
              >
                <path d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z" />
              </svg>
              <span className="sr-only">Stars: </span>
              <span>{repo?.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-green-500"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
              </svg>
              <span className="sr-only">Issues: </span>
              <span>{repo?.open_issues_count}</span>
            </p>
          </div>
          <a href={repo?.owner?.html_url} target="_blank" rel="noreferrer">
            <img
              src={repo?.owner?.avatar_url}
              alt={`${repo?.owner?.login}'s avatar`}
              className="h-8 w-8 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
