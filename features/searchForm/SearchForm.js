import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { throttle } from "lodash"
import { setQuery, setError, toggleIsQuick, setIsSubmitting } from "./searchFormSlice"

import Spinner from "@assets/svgs/spinner-third-duotone.svg"

export function SearchForm({ setResults }) {
  const query = useSelector((state) => state.searchForm.query)
  const isQuick = useSelector((state) => state.searchForm.isQuick)
  const isSubmitting = useSelector((state) => state.searchForm.isSubmitting)
  const error = useSelector((state) => state.searchForm.error)
  const dispatch = useDispatch()

  const debounceFetch = React.useCallback(throttle(fetchFromGitHub, 500, { leading: false }), [])

  async function fetchFromGitHub(val) {
    if (!val) return dispatch(setError("Please provide a valid query"))

    dispatch(setError(""))
    dispatch(setIsSubmitting(true))
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(val)}`)
      if (res.status === 422) {
        dispatch(setError("Unable to process, no valid query was provided"))
      } else {
        const data = await res.json()
        setResults(data)
      }
    } catch (err) {
      throw err
    }

    dispatch(setIsSubmitting(false))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetchFromGitHub(query?.trim())
  }

  React.useEffect(() => {
    dispatch(setError(""))
    if (!isQuick) return
    if (query.length >= 3) {
      debounceFetch(query?.trim())
    }
  }, [query])

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div className="flex space-x-2 items-center">
          <input
            className="border border-gray-300 rounded px-4 py-2"
            value={query}
            onChange={(event) => {
              dispatch(setQuery(event.target.value))
            }}
            placeholder="Cameron Solis"
          />
          <button type="submit" className="bg-indigo-700 text-white rounded px-4 py-2">
            Search
          </button>
          {query.length >= 1 && (
            <button
              type="button"
              className="bg-white text-indigo-700 border border-indigo-700 rounded px-4 py-2"
              onClick={() => dispatch(setQuery(""))}
            >
              Clear
            </button>
          )}
          {isSubmitting && <Spinner className="h-8 animate-spin" />}
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className="px-4 py-2 bg-indigo-100 rounded">
          <label>
            <input
              type="checkbox"
              checked={isQuick}
              onChange={() => {
                dispatch(toggleIsQuick())
              }}
              className="mr-2 -mt-1"
            />
            Enable quick search? (Makes requests to the GitHub API as you type)
          </label>
        </div>
      </form>
    </>
  )
}
