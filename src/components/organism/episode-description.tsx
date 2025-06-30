import { Divider, Time, Typography } from "../atoms";
import { WatchedFavoriteAction } from "../molecules/watched-favorite-action";

interface EpisodeDescriptionProps {
  id: string
  episode: string
  airDate: string
  isFavorite: boolean
  isWatch: boolean
}

export function EpisodeDescription({ id, episode, airDate, isFavorite, isWatch }: EpisodeDescriptionProps) {

  return (
    <div className="flex gap-4 md:gap-6 items-center justify-start mt-4 text-slate-200">
      <Typography>{episode}</Typography>
      <Divider />
      <Time date={airDate} />
      <Divider />
      <WatchedFavoriteAction
        id={id}
        isFavorite={isFavorite}
        isWatch={isWatch}
      />
    </div>
  )
}