import About from "./components/organisms/About"
import Hero from "./components/organisms/Hero"
import Projects from "./components/organisms/Projects"

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
