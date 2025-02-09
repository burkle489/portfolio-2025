type TExperienceCardProps = {
  role: string
  company: string
  startDate: string
  endDate: string
}

const ExperienceCard = ({
  role,
  company,
  startDate,
  endDate,
}: TExperienceCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 col-span-1 border-b-2 py-4 px-3 items-start md:items-end justify-between border-blue-darkest ">
      <div>
        <h3 className="text-3xl md:text-4xl">{role}</h3>
        <h4 className="text-2xl md:text-3xl text-blue-light">{company}</h4>
      </div>
      <h5 className="text-xl md:text-2xl">
        {startDate} - {endDate}
      </h5>
    </div>
  )
}

export default ExperienceCard
