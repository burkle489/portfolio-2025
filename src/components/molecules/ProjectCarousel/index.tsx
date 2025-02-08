"use client"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import "./styles.scss"
import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa"

type TCarouselProps = {
  slides: {
    id: number
    title: string
    description: string
    image: string
  }[]
  options?: EmblaOptionsType
}

const ProjectCarousel: React.FC<TCarouselProps> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla w-full cursor-grab">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((slide, index) => (
            <div
              className="embla__slide transition-all duration-300 flex flex-col gap-4"
              key={index}
            >
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full"
              >
                <div className="group relative h-full w-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center absolute top-0 left-0 h-full"
                  />
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 h-full w-full flex justify-center items-center z-10">
                    <div className="rounded-full bg-blue-lightest w-0 h-0 group-hover:w-20 group-hover:h-20 transition-all duration-500 relative z-30 flex justify-center items-center">
                      <FaLocationArrow className="text-blue-darkest text-sm group-hover:text-2xl transition-all duration-500" />
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCarousel
