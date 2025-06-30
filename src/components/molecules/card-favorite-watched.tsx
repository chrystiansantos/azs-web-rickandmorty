import { convertDate } from "@/util";
import { AirDateEpisode, Card, Image, TitleEpisode } from "../atoms";

interface CardFavoriteWatchedProps {
  name: string
  episode: string
  air_date: string
}

export function CardFavoriteWatched({ name, episode, air_date }: CardFavoriteWatchedProps) {
  const dateFormatted = convertDate(air_date)

  return (
    <Card>
      <div className="relative w-full h-52 rounded-xl overflow-hidden">
        <Image src={`/episodes/${episode}.webp`} alt={`Preview do episódio ${episode}`} />
      </div>
      <div className="px-2 mt-4">
        <div className="h-20">
          <TitleEpisode>{`${episode}, ${name}`}</TitleEpisode>

          <AirDateEpisode>
            Estreado em: <time dateTime={new Date(air_date).toString()}>
              {dateFormatted}
            </time>
          </AirDateEpisode>
        </div>
      </div>
    </Card>
  )
}