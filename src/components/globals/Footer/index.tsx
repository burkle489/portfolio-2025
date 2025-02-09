import { FaArrowRightLong } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="w-full h-auto text-black font-medium relative overflow-hidden mt-20">
      <div className="w-10/12 relative mx-auto border-t-2 py-12 md:py-28 border-blue-lightest/50">
        <h2 className="hidden sm:block text-8xl sm:text-[8rem] lg:text-[10rem] text-blue-lightest/50 absolute -bottom-4  left-0 whitespace-nowrap ">
          get in touch
        </h2>
        <div className="flex items-center w-11/12 mx-auto justify-end relative overflow-hidden px-1">
          <div className="flex flex-col items-end justify-end ">
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
