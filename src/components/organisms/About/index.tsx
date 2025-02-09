import { FC } from "react"

const About: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-11/12 py-32 mx-auto">
        <p className="mx-auto text-xl md:text-3xl text-[#000] max-w-4xl md:mr-32">
          {children}
        </p>
      </div>
    </div>
  )
}

export default About
