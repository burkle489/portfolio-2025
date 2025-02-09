import { FC } from "react"
import { FaArrowRightLong } from "react-icons/fa6"

const Hero: FC<{
  children: React.ReactNode
  hasContactLinks?: boolean
}> = ({ hasContactLinks = false, children }) => {
  return (
    <div className="flex flex-col items-center justify-end bg-blue-darkest h-screen w-screen relative text-white">
      {hasContactLinks && (
        <div className="flex flex-col items-end justify-end absolute top-8 right-8">
          <a
            target="_blank"
            href="https://github.com/burkle489"
            className="group text-2xl flex items-center justify-center gap-1"
          >
            github
            <span>
              <FaArrowRightLong className="text-lg -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tayler-burke/"
            className="text-2xl group flex items-center justify-center gap-1"
          >
            linkedin
            <span>
              <FaArrowRightLong className="text-lg -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </span>
          </a>
          <a
            target="_blank"
            href="mailto:taylerburke48@gmail.com"
            className="text-2xl group flex items-center justify-center gap-1"
          >
            taylerburke48@gmail.com
            <span>
              <FaArrowRightLong className="text-lg -rotate-45 group-hover:rotate-0 transition-all duration-500" />
            </span>
          </a>
        </div>
      )}
      <div className="w-screen h-auto relative overflow-hidden">{children}</div>
    </div>
  )
}

export default Hero
