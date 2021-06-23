import Image from "next/image"
import { useInView } from "react-intersection-observer"

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
  link?: string
}

const ProjectCard = ({ title, client, summary, skills, imageData, link }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const animation = inView ? "motion-safe:animate-slideup" : "motion-safe:opacity-0"

  return (
    <div className={`mb-6 p-2 rounded  border border-indigo-700 ${animation}`} ref={ref}>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-bold uppercase inline">
              {link && (
                <span role="img" aria-label="link">
                  🔗
                </span>
              )}
              {title}
            </h3>
            <p className="inline-block ml-1.5">
              {" / "}
              {client}
            </p>
          </a>
        ) : (
          <>
            <h3 className="text-lg font-bold uppercase inline">
              {link && (
                <span role="img" aria-label="link">
                  🔗
                </span>
              )}
              {title}
            </h3>
            <p className="inline-block ml-1.5">
              {" / "}
              {client}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-screen-lg md:w-1/2 relative">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Image height={imageData.height} width={imageData.width} src={imageData.url} />
            </a>
          ) : (
            <Image height={imageData.height} width={imageData.width} src={imageData.url} />
          )}
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
