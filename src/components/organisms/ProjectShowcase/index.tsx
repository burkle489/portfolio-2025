import Image from "next/image"
const ProjectShowcase = () => {
  return (
    <section className="w-full h-auto bg-white">
      <div className="px-8 py-32 mx-auto">
        <div className="grid gap-x-4 gap-y-16 grid-cols-1 md:grid-cols-6 w-11/12 mx-auto">
          <div className="col-span-6 overflow-hidden relative aspect-video w-10/12 mx-auto">
            <Image
              src={"/images/projects/squad-battles.png"}
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="col-span-3 overflow-hidden relative aspect-video">
            <Image
              src={
                "/images/projects/squad-battle/pubg-scoreboard-event-setup.png"
              }
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-3 overflow-hidden relative aspect-video">
            <Image
              src={
                "/images/projects/squad-battle/pubg-scoreboard-scorekeeper.png"
              }
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 overflow-hidden relative aspect-video w-10/12 mx-auto">
            <Image
              src={
                "/images/projects/squad-battle/pubg-scoreboard-livestream1.png"
              }
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
