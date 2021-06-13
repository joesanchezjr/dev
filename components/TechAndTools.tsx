type TechAndToolsProps = {
  array?: string[]
  className?: string
}

const TechAndTools = ({ array }: TechAndToolsProps) => {
  return (
    <ul className="flex flex-wrap justify-end space-x-1 mt-6">
      {array?.map((tech, key) => {
        return (
          <li key={key} className="bg-indigo-100 px-1 py-0.5 mt-1 rounded text-sm uppercase">
            {tech}
          </li>
        )
      })}
    </ul>
  )
}

export default TechAndTools
