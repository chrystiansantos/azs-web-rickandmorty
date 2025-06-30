'use client'
import { useUpdateFavorite } from "@/hooks";
import { Heart } from "lucide-react";
import { Button, Divider } from "../atoms";
import { WatchedButton } from "./watched-button";

interface WatchedFavoriteActionProps {
  id: string
  isFavorite: boolean
  isWatch: boolean
}

export function WatchedFavoriteAction({ id, isFavorite, isWatch }: WatchedFavoriteActionProps) {
  const { hasFavorite, favoriteEpisode } = useUpdateFavorite({
    id,
    isFavorite
  })

  return (
    <>
      <Button onClick={favoriteEpisode}>
        <Heart fill={hasFavorite ? "#fb2c36" : "transparent"} className="text-red-500 size-5" />
      </Button>
      <Divider />
      <WatchedButton id={id} isWatch={isWatch} />
    </>
  )
}