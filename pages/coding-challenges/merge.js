import React from "react"

import { merge, mergeAlt } from "@utils/merge"
import Layout from "@components/Layout"

import Header from "@components/Header"

export default function OverlappingItems() {
  const items = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
  ]

  return (
    <Layout>
      <Header
        title="Merged Array"
        description="An example using ES6 to simplify an array with overlapping items."
      />
      <main className="px-4">
        <section className="mb-4">
          <p>
            View code used for merged arrays here:{" "}
            <a
              href="https://github.com/joesanchezjr/coding-challenges/blob/9bd2503c855cca1d01daedb0b4363692109fc481/utils/merge.js"
              className="underline"
            >
              GitHub Repository
            </a>
          </p>
        </section>
        <section className="flex space-x-4 max-w-full overflow-x-scroll">
          <div>
            <h2 className="text-xl font-bold">Original Array</h2>
            <pre>{JSON.stringify(items, null, 2)}</pre>
          </div>
          <div>
            <h2 className="text-xl font-bold">Sorted Array</h2>
            <pre>
              {JSON.stringify(
                [...items].sort((a, b) => a.startPx - b.startPx),
                null,
                2
              )}
            </pre>
          </div>
          <div>
            <h2 className="text-xl font-bold">Merged Array</h2>
            <pre>{JSON.stringify(merge(items), null, 2)}</pre>
          </div>
          <div>
            <h2 className="text-xl font-bold">Merged Array Alt</h2>
            <pre>{JSON.stringify(mergeAlt(items), null, 2)}</pre>
          </div>
        </section>
      </main>
    </Layout>
  )
}
