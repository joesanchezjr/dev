import Image from "next/image"
import Layout from "../components/Layout"
import SkillAndTechMarquee from "../components/SkillsAndTechMarquee"
import TechAndTools from "../components/TechAndTools"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "Personal Website",
    client: "Joe Sanchez Jr",
    imageData: {
      width: 1267,
      height: 800,
      url: "/personal-screenshot.jpg",
    },
    summary:
      "During my tenure as part of the small team of developers at Preemptive Love, I worked as one of the primary engineers of the mission critical donation processing form. The project had us transition a legacy form built with PHP to a new form built with React.",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Preemptive Love",
    imageData: {
      width: 1251,
      height: 800,
      url: "/main-screenshot.jpg",
    },
    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Disinherited Podcast",
    imageData: {
      width: 1267,
      height: 800,
      url: "/disinherited-screenshot.jpg",
    },
    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Preemptive Love",
    imageData: {
      width: 1267,
      height: 800,
      url: "/to-end-war-screenshot.jpg"
    },    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Preemptive Love",
    imageData: {
      width: 1260,
      height: 844,
      url: "/donate-form-screenshot.jpg"
    },    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Preemptive Love",
    imageData: {
      width: 1299,
      height: 699,
      url: "/loveanyway-screenshot.jpg"
    },    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
  {
    title: "title",
    client: "Preemptive Love",
    imageData: {
      width: 1298,
      height: 690,
      url: "/give-screenshot.jpg"
    },    summary: "summary",
    skills: ["javascript", "git", "react"],
  },
]

const IndexPage = () => (
  <Layout>
    <section className="notch-padding bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 text-indigo-700">
      <div className="p-4 max-w-screen-xl mx-auto">
        <p>
          <span className="bg-white px-1 py-0.5 rounded text-sm">NEW</span>{" "}
          <span role="img" aria-label="Butterfly">
            🦋
          </span>{" "}
          Available for hire!
        </p>
        <p className="max-w-prose text-4xl my-12 md:my-16 xl:my-32">
          <span className="font-bold font-serif italic">Front-End Engineer</span> — Creative
          developer with four years of experience building for the web. Dedicated to making
          beautiful and accessible digital products. Seeking to work with a team of good people
          making good things.
        </p>
      </div>
    </section>
    <section>
      <SkillAndTechMarquee />
    </section>
    <div className="bg-indigo-700 mb-2 h-1" />
    <div className="bg-indigo-700 mb-2 h-1.5" />
    <div className="bg-indigo-700 mb-2 h-2" />
    <div className="bg-indigo-700 mb-2 h-2.5" />
    <div className="bg-indigo-700 mb-2 h-3" />
    <div className="bg-indigo-700 mb-2 h-3.5" />
    <section className="notch-padding max-w-screen-xl mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold font-serif italic mb-6 border-b border-indigo-700">
          Featured Work
        </h2>

        {projects.map((project) => {
          return <ProjectCard {...project} />
        })}
      </div>
    </section>
  </Layout>
)

export default IndexPage
