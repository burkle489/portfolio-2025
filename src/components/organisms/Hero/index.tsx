import { FC } from "react"

const Hero: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-end bg-blue-darkest h-screen w-screen">
      <div className="w-screen h-auto relative overflow-hidden">{children}</div>
    </div>
  )
}

export default Hero
