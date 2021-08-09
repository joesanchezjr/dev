import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN })

module.exports = async (req, res) => {
  const { query } = req

  if (!query?.q) return res.status(422).json({ errors: { code: "missing" } })

  try {
    const response = await octokit.rest.search.users({ q: query.q, per_page: 100 })

    if (response.status !== 200) {
      return res.status(response.status).json(response.data)
    }

    res.status(200).json(response.data.items)
  } catch (err) {
    throw err
  }
}
