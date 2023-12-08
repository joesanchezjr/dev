import { Octokit, RequestError } from "octokit";

export type User = Awaited<ReturnType<typeof getUser>>;

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

let controller: undefined | AbortController;

export const getUser = async (username: string) => {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();

  try {
    const response = await octokit.request("GET /users/{username}", {
      username,
      request: { signal: controller.signal },
    });

    return { data: response.data };
  } catch (err) {
    if (err instanceof RequestError) {
      console.log(err.message);
      return { error: err.message };
    }
    throw new Error("Uknown error - unable to fetch user");
  }
};
