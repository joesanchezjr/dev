// import { Octokit, RequestError } from "octokit";

// const octokit = new Octokit({
//   auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
// });

// let controller: undefined | AbortController;

// export type RepositoryInformation = Awaited<
//   ReturnType<typeof getRepositoryInformation>
// >;

// export const getRepositoryInformation = async (repository: string) => {
//   const [owner, repo] = repository.split("/");

//   if (controller) {
//     controller.abort();
//   }

//   controller = new AbortController();

//   try {
//     const response = await octokit.request("GET /repos/{owner}/{repo}", {
//       owner,
//       repo,
//       request: { signal: controller.signal },
//     });

//     return { data: response.data };
//   } catch (err) {
//     if (err instanceof RequestError) {
//       console.log(err.message);
//       return { error: err.message };
//     }
//     throw new Error("Unable to fetch repository information");
//   }
// };
