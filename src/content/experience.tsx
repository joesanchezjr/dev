import * as React from "react"
export type Experience = {
  company: string
  title: string
  startDate: string
  endDate: string
  content: React.ReactNode
}[]

export const experience: Experience = [
  {
    company: "Optum",
    title: "Senior Software Engineer",
    startDate: "2021-09",
    endDate: "2023-08",
    content: <p>→ Built with &mdash; React, TypeScript, Styled Components, Webpack, Redux, Docker, Jenkins</p>,
  },
  {
    company: "Preemptive Love",
    title: "Front End Engineer",
    startDate: "2019-01",
    endDate: "2021-06",
    content: <p>→ Built with &mdash; HTML, CSS, JavaScript, React, WordPress, Shopify (Liquid)</p>,
  },
  {
    company: "Life Teen",
    title: "Front End Developer",
    startDate: "2017-01",
    endDate: "2018-10",
    content: <p>→ Built with &mdash; HTML, CSS, JavaScript, WordPress, React, Shopify (Liquid)</p>,
  },
]
