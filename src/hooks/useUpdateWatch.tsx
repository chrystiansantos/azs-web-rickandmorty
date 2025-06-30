import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";

interface UseUpdateWatchProps {
  id: string
  isWatch: boolean
}

export function useUpdateWatch({ id, isWatch }: UseUpdateWatchProps) {
  const [hasWatched, setHasWatched] = useState(isWatch)

  async function watchEpisode() {
    const episodeWatchCookies = await getCookie('watch')
    const episodeWatch = JSON.parse(episodeWatchCookies ?? '[]')

    if (episodeWatch.includes(id)) {
      const episodes = episodeWatch.filter((episode: string) => episode !== id)
      setCookie('watch', JSON.stringify(episodes), { path: '/' });
      setHasWatched(false)
      return
    }

    setCookie('watch', JSON.stringify([...episodeWatch, id]), { path: '/' });
    setHasWatched(true)
  }

  return {
    hasWatched,
    watchEpisode
  }
}