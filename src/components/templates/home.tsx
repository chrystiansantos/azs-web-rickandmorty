import { EpisodeWrapper } from "../atoms";
import { HeaderNavigation, Hero } from "../organism";

interface HomeProps {
  episodeFavorites: string[]
  episodeWatches: string[]
}

export function Home({ episodeFavorites, episodeWatches }: HomeProps) {
  return (
    <div className="container">
      <HeaderNavigation />
      <Hero />
      <EpisodeWrapper
        favorites={episodeFavorites}
        episodes={episodeWatches}
      />
    </div>
  )
}