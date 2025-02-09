type TExperienceCardProps = {
  role: string
  company: string
  startDate: string
  endDate: string
  url: string
}

const ExperienceCard = ({
  role,
  company,
  startDate,
  endDate,
  url,
}: TExperienceCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group  col-span-1    transition-all duration-300 ease-in-out"
    >
      <div className="group-hover:scale-105 transition-all border-b-2 border-blue-lightest hover:border-blue-darkest duration-300 ease-in-out mx-auto flex flex-col md:flex-row gap-2 py-4 group-hover:px-0 px-3 items-start md:items-end justify-between ">
        <div>
          <h3 className="text-3xl md:text-4xl">{role}</h3>
          <h4 className="text-2xl md:text-3xl text-blue-light">{company}</h4>
        </div>
        <h5 className="text-xl md:text-2xl">
          {startDate} - {endDate}
        </h5>
      </div>
    </a>
  )
}

export default ExperienceCard
