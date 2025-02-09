"use client"
import WorkCard, { TWorkCardProps } from "@/components/atoms/WorkCard"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import "./styles.scss"

type TCarouselProps = {
  slides: TWorkCardProps[]
  options?: EmblaOptionsType
}

const WorkCarousel: React.FC<TCarouselProps> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla w-full cursor-grab">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((slide, index) => (
            <WorkCard slide={slide} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkCarousel
