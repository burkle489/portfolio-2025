import Image from "next/image"
const WorkShowcase = () => {
  return (
    <section className="w-full h-auto bg-white">
      <div className="px-8 py-32 mx-auto">
        <div className="grid gap-4 lg:gap-x-4 lg:gap-y-16 grid-cols-1 lg:grid-cols-6 w-full lg:w-11/12 mx-auto">
          <div className="col-span-6 overflow-hidden relative aspect-video w-full lg:w-10/12 lg:mx-auto">
            <Image
              src={"/images/work/squad-battles.png"}
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-3 w-full overflow-hidden relative aspect-video">
            <Image
              src={"/images/work/squad-battle/pubg-scoreboard-event-setup.png"}
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-3 overflow-hidden relative aspect-video">
            <Image
              src={"/images/work/squad-battle/pubg-scoreboard-scorekeeper.png"}
              alt="pubg-scoreboard-event-setup"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-6 overflow-hidden relative aspect-video w-full lg:w-10/12 lg:mx-auto">
            <Image
              src={"/images/work/squad-battle/pubg-scoreboard-livestream1.png"}
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

export default WorkShowcase
