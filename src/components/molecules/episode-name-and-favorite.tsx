'use client'
import { useUpdateFavorite } from "@/hooks";
import { Heart } from "lucide-react";
import colors from 'tailwindcss/colors';
import { Button, TitleEpisode } from "../atoms";
interface EpisodeNameAndFavoriteProps {
  id: string
  episode: string
  name: string
  isFavorite: boolean
}

export function EpisodeNameAndFavorite({ id, episode, name, isFavorite }: EpisodeNameAndFavoriteProps) {
  const { hasFavorite, favoriteEpisode } = useUpdateFavorite({
    id,
    isFavorite
  })

  return (
    <div className="text-zinc-200 flex justify-between items-center gap-2">
      <TitleEpisode>{`${episode}, ${name}`}</TitleEpisode>
      <Button onClick={favoriteEpisode}>
        <Heart data-testid="favorite-icon" fill={hasFavorite ? colors.red['500'] : "transparent"} className="text-red-500" />
      </Button>
    </div>
  )
}