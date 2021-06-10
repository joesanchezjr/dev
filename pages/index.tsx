import Image from "next/image"
import Layout from "../components/Layout"
import SkillAndTechMarquee from "../components/SkillsAndTechMarquee"

const IndexPage = () => (
  <Layout>
    <section className="notch-padding bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 text-indigo-700">
      <div className="p-4">
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
    <section className="notch-padding">
      <div className="p-4">
        <h2 className="text-2xl font-bold font-serif italic">Previous Work</h2>
        <div>
          <h3 className="text-lg font-bold uppercase inline">Donation Procesing Form</h3>
          {" / "}
          <p className="inline">Preemptive Love</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-screen-lg lg:w-1/2 relative">
            <span className="absolute inset-0 z-10 opacity-50 hover:opacity-0 transition-opacity bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 text-indigo-700" />
            <Image height={844} width={1260} src="/donate-form-screenshot.jpg" />
          </div>
          <p className="max-w-prose border-l border-indigo-700 pl-4 lg:ml-4">
            During my tenure as part of the small team of developers at Preemptive Love, I worked as
            one of the primary engineers of the mission critical donation processing form. The
            project had us transition a legacy form built with PHP to a new form built with React.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
