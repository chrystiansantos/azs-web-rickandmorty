import { Clapperboard } from "lucide-react";
import { SubTitle, TitleEpisode } from "../atoms";

interface EmptyData {
  title: string
  subtitle: string
}

export function EmptyData({ title, subtitle }: EmptyData) {
  return (
    <div className="text-center flex flex-col items-center gap-2 mt-36 max-w-72 mx-auto">
      <Clapperboard className="size-10" />
      <TitleEpisode>
        {title}
      </TitleEpisode>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </div>
  )
}