const skillsAndTech = [
  "TypeScript",
  "React",
  "Next",
  "Redux",
  "Create React App",
  "React Router",
  "HTML",
  "CSS",
  "SCSS",
  "CSS-in-JS",
  "Styled Components",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "GraphQL",
  "Node",
  "VS Code",
  "NPM",
  "CI/CD",
  "APIs",
  "Jest",
  "Agile",
  "A11y",
  "CSS Modules",
  "Figma",
  "Prettier",
]

export default function Skills() {
  return (
    <>
      <section>
        <div className="w-full max-w-screen-2xl mx-auto px-4 py-16 flex gap-2 flex-col md:flex-row border-t border-indigo-100">
          <h2 className="text-2xl mb-12 md:min-w-[25%] text-[#141539]">Skills</h2>
          <ul className="text-pink-500 font-serif text-xl">
            {skillsAndTech.map((skill, index) => {
              return <li key={index}>{skill}</li>
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
