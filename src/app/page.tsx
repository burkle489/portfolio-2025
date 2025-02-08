import Image from "next/image"
import Hero from "./components/organisms/Hero"
import Projects from "./components/organisms/Projects"
import About from "./components/organisms/About"

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}
