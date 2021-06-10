import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <section className="p-4 bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 text-indigo-700">
      <p>
        <span className="bg-white px-1 py-0.5 rounded text-sm">NEW</span>{" "}
        <span role="img" aria-label="Butterfly">
          🦋
        </span>{" "}
        Available for hire!
      </p>
      <p className="max-w-prose text-4xl my-12 md:my-16">
        <span className="font-serif italic">Front-End Engineer</span> — Creative
        developer with four years of experience building for the web. Dedicated
        to making beautiful and accessible digital products. Seeking to work
        with a team of good people making good things.
      </p>
    </section>
    <section className="marquee-container overflow-hidden flex relative w-full p-4">
      <ul className="marquee uppercase font-bold text-xl flex space-x-8 list-disc list-outside pl-8">
        <li>React</li>
        <li>Next</li>
        <li>Gatsby</li>
        <li>Create React App</li>
        <li>WordPress</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>CSS-in-JS</li>
        <li>Styled Components</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>GraphQL</li>
        <li>Node</li>
        <li>VS Code</li>
      </ul>
      <ul className="marquee uppercase font-bold text-xl flex space-x-8 list-disc list-outside pl-8">
        <li>React</li>
        <li>Next</li>
        <li>Gatsby</li>
        <li>Create React App</li>
        <li>WordPress</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>CSS-in-JS</li>
        <li>Styled Components</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>GraphQL</li>
        <li>Node</li>
        <li>VS Code</li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
