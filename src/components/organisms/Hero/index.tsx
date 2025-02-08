import { FC } from "react"
import TaylerBurkeSVG from "../../atoms/TaylerBurkeSVG"

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center justify-end bg-blue-darkest h-screen w-screen">
      <div className="w-screen h-auto relative overflow-hidden">
        <div className="transform translate-y-[20%]">
          <TaylerBurkeSVG />
        </div>
      </div>
    </div>
  )
}

export default Hero
