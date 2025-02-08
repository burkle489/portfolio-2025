import ProjectCarousel from "../../molecules/ProjectCarousel"
import { projects } from "./constants"

const Projects = () => {
  return (
    <div className="bg-white h-auto w-full">
      <h2 className="text-[15rem] text-blue-lightest/50 translate-y-[25%]">
        projects
      </h2>
      <div className="w-full px-20 mx-auto relative">
        <ProjectCarousel slides={projects} options={{ dragFree: true }} />
      </div>
    </div>
  )
}

export default Projects
