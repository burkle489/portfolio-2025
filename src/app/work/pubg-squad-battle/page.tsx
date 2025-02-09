import About from "@/components/organisms/About"

import SquadBattleSVG from "@/components/atoms/SVGs/SquadBattleSVG"
import Hero from "@/components/organisms/Hero"
import WorkShowcase from "@/components/organisms/WorkShowcase"
import { FaArrowLeftLong } from "react-icons/fa6"
import Link from "next/link"

const PUBGSquadBattlePage = () => {
  return (
    <main className="relative">
      <Link
        href="/"
        className="shadow hover:shadow-md transition-all duration-300 fixed group flex flex-col items-center justify-center  top-8 left-4 z-20 rounded-full w-20 h-20 bg-white"
      >
        <FaArrowLeftLong className="text-3xl text-blue-light group-hover:text-blue-darkest group-hover:scale-110 transition-all duration-500" />
      </Link>

      <Hero>
        <div className="transform translate-y-[11%]">
          <SquadBattleSVG />
        </div>
      </Hero>
      <About>
        PUBG: Squad Battle was a competitive livestream event. I was tasked with
        building an app used by admins to keep track of the scores in real-time.
        The app included authentication, event & team creation as well as
        scoring customization.
      </About>
      <WorkShowcase />
    </main>
  )
}

export default PUBGSquadBattlePage
