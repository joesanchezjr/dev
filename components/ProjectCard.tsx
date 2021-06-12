import Image from "next/image"
import TechAndTools from "./TechAndTools"

type ProjectCardProps = {
  className?: string
  title?: string
  client?: string
  summary: string
  skills?: string[]
  imageData: {
    url: string
    height: number
    width: number
  }
}

const ProjectCard = ({ title, client, summary, skills, imageData }: ProjectCardProps) => {
  return (
    <div className="mb-6 p-2 rounded  border border-indigo-700">
      <div>
        <h3 className="text-lg font-bold uppercase inline">{title}</h3>
        {" / "}
        <p className="inline">{client}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-screen-lg md:w-1/2 relative">
          <span className="absolute inset-0 z-10 opacity-0 hover:opacity-50 transition-opacity bg-gray-100" />
          <Image height={imageData.height} width={imageData.width} src={imageData.url} />
        </div>
        <div className="flex-grow md:border-l border-indigo-700 md:pl-4 md:ml-4 flex flex-col justify-between mt-2 md:mt-0">
          <p className="max-w-prose" dangerouslySetInnerHTML={{ __html: summary }} />
          <TechAndTools array={skills} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
