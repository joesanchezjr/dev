import Link from "next/link"

import Layout from "../../components/Layout"

const IndexPage = () => (
  <Layout>
    <ul>
      <li>
        <Link href="/coding-challenges/api-search">Api Search</Link>
      </li>
      <li>
        <Link href="/coding-challenges/merge">Merge</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
