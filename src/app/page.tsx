import TaylerBurkeSVG from "@/components/atoms/SVGs/TaylerBurkeSVG"
import About from "../components/organisms/About"
import Hero from "../components/organisms/Hero"
import Projects from "../components/organisms/Projects"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero>
          <div className="transform translate-y-[20%]">
            <TaylerBurkeSVG />
          </div>
        </Hero>
        <About>
          Entrepreneurial Full-Stack Developer with a passion for creating
          end-to-end solutions. Collaboration and communication are the
          cornerstone of my workflow. With previous experience running
          businesses, I offer more than just writing code.
        </About>
        <Projects />
      </main>
    </div>
  )
}
