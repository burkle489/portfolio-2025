import { FC } from "react"
import { FaLocationArrow } from "react-icons/fa"
import Image from "next/image"
import "../../molecules/ProjectCarousel/styles.scss"

export type TProjectCardProps = {
  id: number
  title: string
  description: string
  image: string
  url?: string
  internalLink?: boolean
}

const ProjectCard: FC<{
  slide: TProjectCardProps
}> = ({ slide }) => {
  return (
    <div className="embla__slide transition-all duration-300 flex flex-col gap-4">
      <a
        href={slide.url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full"
      >
        <div className="group relative h-full w-full overflow-hidden aspect-video">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center absolute top-0 left-0 h-full "
          />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 h-full w-full flex justify-center items-center z-10">
            <div className="rounded-full bg-blue-lightest/90 w-0 h-0 group-hover:w-20 group-hover:h-20 transition-all duration-500 relative z-30 flex justify-center items-center">
              <FaLocationArrow className="text-blue-darkest/90 text-sm group-hover:text-2xl transition-all duration-500" />
            </div>
            <div className=" z-20 w-full h-full flex flex-col justify-center items-center absolute top-0 bg-black/50 left-0 p-4"></div>
          </div>
        </div>
      </a>
      <div className=" max-w-lg flex flex-col gap-2 h-full">
        <h3 className="text-3xl font-bold text-black">{slide.title}</h3>
        <p className="text-xl text-black">{slide.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
