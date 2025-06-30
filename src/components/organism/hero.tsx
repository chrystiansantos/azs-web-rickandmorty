import { HeroDescription, WatchNowButton } from "../molecules";

export function Hero() {
  return (
    <div className="h-[460px] md:h-[720px] w-full bg-[url(/hero.jpg)] bg-contain bg-position-[top_1rem_left_0rem] md:bg-position-[top_-0.5rem_left_0rem] md:bg-size-[auto_820px] bg-no-repeat bg-black flex items-end md:items-center">
      <div className="max-w-[400px] flex flex-col gap-2">
        <HeroDescription />
        <div className="mt-8">
          <WatchNowButton />
        </div>
      </div>
    </div>
  )
}