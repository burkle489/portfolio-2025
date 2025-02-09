import WorkCarousel from "../../molecules/WorkCarousel"
import { work } from "./constants"

const Work = () => {
  return (
    <section className="bg-white h-auto w-full">
      <h2 className="text-8xl sm:text-[10rem] md:text-[15rem] text-blue-lightest/50 translate-y-[15%] sm:translate-y-[20%] md:translate-y-[25%]">
        work
      </h2>
      <div className="w-full px-8 md:px-20 mx-auto relative">
        <WorkCarousel slides={work} options={{ dragFree: true }} />
      </div>
    </section>
  )
}

export default Work
