type Experience = {
  company: string
  position: string
  startDate: string
  endDate?: string
  details: {
    summary?: string
    points: string[]
  }[]
}[]

const experience: Experience = [
  {
    company: "Optum",
    position: "Senior Software Engineer",
    startDate: "Sept 2021",
    details: [
      {
        summary: "Working on the UnitedHealthcare claims experience, a subscriber facing application",
        points: [
          "Collaborating with cross-functional team to develop components and features for both web and mobile apps",
          "Utilizing Redux to manage state and data fetched from a middleware API",
          "Mentoring new engineers in best practices and building team cohesion",
          "Participating in the on-call and certification process, managing weekly release, triaging production issues",
        ],
      },
    ],
  },
  {
    company: "Preemptive Love",
    position: "Front-End Engineer",
    startDate: "Jan 2019",
    endDate: "Jun 2021",
    details: [
      {
        summary: "Engineered & developed mission critical donation processing form",
        points: [
          "Collaborated with back-end developer to build internal microservices API",
          "Integrated front-end React components with microservices API & Stripe's JavaScript SDK",
          "Managed app & UI state with React Context API",
        ],
      },
      {
        summary: "Lead transition to React & headless WordPress development",
        points: [
          "Advocated for the addition of React to organization's tech stack",
          "Developed various React microsites, including special & capital campaign sites",
          "Integrated front-end with various internal and external APIs & SDKs",
          "Lead development of new Next.js + GraphQL + WordPress site, including documentation",
        ],
      },
    ],
  },
  {
    company: "Life Teen",
    position: "Photographer & Front-End Developer",
    startDate: "Jan 2017",
    endDate: "Oct 2018",
    details: [
      {
        points: [
          "Developed small to medium marketing sites and pages with WordPress and React",
          "Lead contractors as interim lead developer during a time of transition at the organization",
        ],
      },
    ],
  },
  {
    company: "Personal Work",
    position: "Photographer & Front-End Engineer",
    startDate: "Jan 2017",

    details: [
      {
        summary: "Designed, developed, & deployed personal websites",
        points: [
          "Built a Next.js + TailwindCSS project that sourced data from the Contentful GraphQL API",
          "Integrated Vercel + Contentful webhooks for auto-deployment on CMS changes",
          "Built a Gatsby.js + SCSS project that sourced local markdown files",
        ],
      },
    ],
  },
]

export default function WorkExperience() {
  return (
    <>
      <section className="text-[#141539]">
        <div className="w-full max-w-screen-2xl mx-auto px-4 py-16 border-t border-indigo-100">
          <h2 className="text-2xl mb-12">Work Experience</h2>
          <div className="flex flex-col gap-8 md:gap-12">
            {experience.map((xp) => {
              return (
                <div className="flex flex-col md:flex-row gap-2" key={xp.company}>
                  <h3 className="text-2xl font-serif  md:min-w-[25%] sm:!leading-none">{xp.company}</h3>
                  <div>
                    <p>
                      <span className="font-bold">{xp.position} </span>
                      <span className="block md:inline">
                        &mdash;{" "}
                        <span className="text-slate-400">
                          {xp.startDate} - {xp.endDate ? xp.endDate : "Present"}
                        </span>
                      </span>
                    </p>
                    {xp.details.map((detail, index) => {
                      return (
                        <div className="mt-2" key={index}>
                          {detail.summary && <p>{detail.summary}</p>}
                          <ul className="list-disc list-inside max-w-[60ch]">
                            {detail.points.map((item, index) => {
                              return <li key={index}>{item}</li>
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
