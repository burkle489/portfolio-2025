"use client"
import ProjectCard, { TProjectCardProps } from "@/components/atoms/ProjectCard"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import "./styles.scss"

type TCarouselProps = {
  slides: TProjectCardProps[]
  options?: EmblaOptionsType
}

const ProjectCarousel: React.FC<TCarouselProps> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla w-full cursor-grab">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((slide, index) => (
            <ProjectCard slide={slide} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCarousel
