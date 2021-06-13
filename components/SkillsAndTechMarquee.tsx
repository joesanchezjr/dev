const skillsAndTech = [
  "React",
  "Next",
  "Gatsby",
  "Create React App",
  "WordPress",
  "HTML",
  "CSS",
  "SCSS",
  "CSS-in-JS",
  "Styled Components",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "GraphQL",
  "Node",
  "VS Code",
  "Stripe",
  "APIs",
  "A11y",
  "TypeScript",
  "Prettier",
]

export default function SkillAndTechMarquee() {
  return (
    <div className="marquee-container overflow-hidden flex relative w-full p-4" aria-hidden={true}>
      <ul className="marquee uppercase font-bold text-xl flex space-x-8 list-disc list-outside pl-8">
        {skillsAndTech.map((skill, key) => {
          return <li key={key}>{skill}</li>
        })}
      </ul>
      <ul className="marquee uppercase font-bold text-xl flex space-x-8 list-disc list-outside pl-8">
        {skillsAndTech.map((skill, key) => {
          return <li key={key}>{skill}</li>
        })}
      </ul>
    </div>
  )
}
