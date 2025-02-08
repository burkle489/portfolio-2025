import About from "@/components/organisms/About"

import SquadBattleSVG from "@/components/atoms/SVGs/SquadBattleSVG"
import Hero from "@/components/organisms/Hero"
import ProjectShowcase from "@/components/organisms/ProjectShowcase"

const PUBGSquadBattlePage = () => {
  return (
    <div className="">
      <main className="">
        <Hero>
          <div className="transform translate-y-[11%]">
            <SquadBattleSVG />
          </div>
        </Hero>
        <About>
          PUBG: Squad Battle was a competitive livestream event. I was tasked
          with building an app used by admins to keep track of the scores in
          real-time. The app included authentication, event & team creation as
          well as scoring customization.
        </About>
        <ProjectShowcase />
      </main>
    </div>
  )
}

export default PUBGSquadBattlePage
