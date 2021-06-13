import Layout from "../components/Layout"
import SkillAndTechMarquee from "../components/SkillsAndTechMarquee"
import ProjectCard from "../components/ProjectCard"

import projects from "../data/projects"

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

        {projects.map((project, key) => {
          return <ProjectCard key={key} {...project} />
        })}
      </div>
    </section>
  </Layout>
)

export default IndexPage
