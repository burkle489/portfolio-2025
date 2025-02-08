import ProjectCarousel from "../../molecules/ProjectCarousel"
import { projects } from "./constants"

const Projects = () => {
  return (
    <div className="bg-white h-auto w-full">
      <div className="w-full py-32 px-20 mx-auto">
        <ProjectCarousel slides={projects} options={{ dragFree: true }} />
      </div>
    </div>
  )
}

export default Projects
