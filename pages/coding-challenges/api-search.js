import React from "react"
import { useSelector } from "react-redux"

import { SearchForm } from "../../features/searchForm/SearchForm"
import UsersTable from "@components/UsersTable"
import Header from "@components/Header"

import Layout from "@components/Layout"

export default function Home() {
  const query = useSelector((state) => state.searchForm.query)

  const [results, setResults] = React.useState([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (query.length === 0) setResults([])
  }, [query])

  return (
    <Layout>
      <Header
        title="GitHub API - Search (Users)"
        description="An example app using the GitHub API to search for users. (100 results)"
      />
      <main className="px-4">
        <SearchForm {...{ setResults, setIsSubmitting }} />
        <h2>Results from API Query:</h2>
        <UsersTable {...{ users: results, isSubmitting }} />
      </main>
    </Layout>
  )
}