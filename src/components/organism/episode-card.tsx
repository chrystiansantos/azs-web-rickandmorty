import { AirDateEpisode, Card, Image } from "../atoms";
import { EpisodeNameAndFavorite } from "../molecules";
import { WatchedCharactersParticipate } from "./watched-characters-participate";

interface EpisodeCardProps {
  id: string
  name: string
  air_date: string
  episode: string
  amountCharacters: number
  isFavorite: boolean
  isWatched: boolean
}

export function EpisodeCard({ id, air_date, amountCharacters, name, episode, isFavorite, isWatched }: EpisodeCardProps) {
  const dateFormat = new Intl.DateTimeFormat(
    'pt-BR'
  ).format(new Date(air_date))

  return (
    <Card>
      <div className="relative w-full h-52 rounded-xl overflow-hidden">
        <Image src={`/episodes/${episode}.webp`} alt={`Preview do episódio ${episode}`} />
      </div>
      <div className="px-2 mt-4">
        <div className="h-20">
          <EpisodeNameAndFavorite id={id} episode={episode} name={name} isFavorite={isFavorite} />
          <AirDateEpisode>
            Estreado em: <time dateTime={new Date(air_date).toString()}>
              {dateFormat}
            </time>
          </AirDateEpisode>
        </div>
        <WatchedCharactersParticipate
          id={id}
          amountCharacters={amountCharacters}
          isWatch={isWatched}
        />
      </div>
    </Card>
  )
}