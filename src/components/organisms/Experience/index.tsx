import ExperienceCard from "@/components/molecules/ExperienceCard"
import { experience } from "./constants"

const Experience = () => {
  return (
    <section className="w-full py-12 md:py-20 !pb-48 h-auto bg-white text-black">
      <h2 className="text-8xl sm:text-[10rem] md:text-[15rem] text-blue-lightest/50 translate-y-[15%] sm:translate-y-[20%] md:translate-y-[25%] w-full text-right">
        experience
      </h2>
      <div className="w-11/12 lg:w-8/12 mx-auto grid grid-cols-1 gap-8 relative z-10">
        {experience.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Experience
