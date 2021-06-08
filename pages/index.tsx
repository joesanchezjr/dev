import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout title="Home | Developer Portfolio">
    <section className="p-2 md:p-4 bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 text-indigo-700">
      <p>
        <span className="bg-white px-2 py-1 rounded text-sm">NEW</span>{" "}
        <span role="img" aria-label="Butterfly">
          🦋
        </span>{" "}
        Available for hire!
      </p>
      <p className="max-w-prose text-4xl my-20">
        <span className="font-serif italic">Front-End Engineer</span> — Creative
        developer with four years of experience building for the web. Dedicated
        to making beautiful and accessible digital products. Seeking to work
        with a team of good people making good things.
      </p>
    </section>
    <section className="p-2 md:p-4">
      <h2 className="text-xl font-bold">So what do I know?</h2>
      <p className="font-mono tracking-widest">HTML</p>
      <p className="font-mono tracking-widest">CSS/SCSS</p>
      <p className="font-mono tracking-widest">JavaScript</p>
      <p className="font-mono tracking-widest">React</p>
    </section>
  </Layout>
)

export default IndexPage
