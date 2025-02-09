import ProjectCarousel from "../../molecules/ProjectCarousel"
import { projects } from "./constants"

const Projects = () => {
  return (
    <section className="bg-white h-auto w-full">
      <h2 className="text-8xl sm:text-[10rem] md:text-[15rem] text-blue-lightest/50 translate-y-[15%] sm:translate-y-[20%] md:translate-y-[25%]">
        projects
      </h2>
      <div className="w-full px-8 md:px-20 mx-auto relative">
        <ProjectCarousel slides={projects} options={{ dragFree: true }} />
      </div>
    </section>
  )
}

export default Projects
