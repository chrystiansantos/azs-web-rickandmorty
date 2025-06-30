import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

interface UseFavoriteProps {
  id: string
  isFavorite: boolean
}

export function useUpdateFavorite({ id, isFavorite }: UseFavoriteProps) {
  const [hasFavorite, setHasFavorite] = useState(isFavorite)

  async function favoriteEpisode() {
    const episodeFavoritesCookies = await getCookie('favorite')
    const episodeFavorites = JSON.parse(episodeFavoritesCookies ?? '[]')

    if (episodeFavorites.includes(id)) {
      const episodes = episodeFavorites.filter((episode: string) => episode !== id)
      setCookie('favorite', JSON.stringify(episodes), { path: '/' });
      setHasFavorite(false)
      return
    }

    setCookie('favorite', JSON.stringify([...episodeFavorites, id]), { path: '/' });
    setHasFavorite(true)
  }

  return {
    hasFavorite,
    favoriteEpisode
  }
}