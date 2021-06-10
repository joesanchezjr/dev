import Image from "next/image"
import Layout from "../components/Layout"
import SkillAndTechMarquee from "../components/SkillsAndTechMarquee"

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

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Personal Website</h3>
            {" / "}
            <p className="inline">Joe Sanchez Jr</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={800} width={1267} src="/personal-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Primary Site</h3>
            {" / "}
            <p className="inline">Preemptive Love</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={799} width={1251} src="/main-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Podcast Website</h3>
            {" / "}
            <p className="inline">Disinherited Podcast</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={800} width={1267} src="/disinherited-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Capital Campaign</h3>
            {" / "}
            <p className="inline">Preemptive Love</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={800} width={1267} src="/to-end-war-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Donation Processing Form</h3>
            {" / "}
            <p className="inline">Preemptive Love</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={844} width={1260} src="/donate-form-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Special Event Microsite</h3>
            {" / "}
            <p className="inline">Preemptive Love</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={699} width={1299} src="/loveanyway-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6  p-2 rounded  border border-indigo-700">
          <div>
            <h3 className="text-lg font-bold uppercase inline">Fundraising Campaign Microsite</h3>
            {" / "}
            <p className="inline">Preemptive Love</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-screen-lg lg:w-1/2 relative">
              <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
              <Image height={690} width={1298} src="/give-screenshot.jpg" />
            </div>
            <div className="max-w-prose lg:border-l border-indigo-700 lg:pl-4 lg:ml-4">
              <p>
                During my tenure as part of the small team of developers at Preemptive Love, I
                worked as one of the primary engineers of the mission critical donation processing
                form. The project had us transition a legacy form built with PHP to a new form built
                with React.
              </p>
              <p className="font-bold mt-8">Tech & Tools:</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
