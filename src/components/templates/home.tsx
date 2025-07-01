import { EpisodeWrapper, HeaderNavigation, Hero } from "../organism";

interface HomeProps {
  episodeFavorites: string[]
  episodeWatches: string[]
}

export function Home({ episodeFavorites, episodeWatches }: HomeProps) {
  return (
    <div className="container pb-20">
      <HeaderNavigation />
      <Hero />
      <EpisodeWrapper
        favorites={episodeFavorites}
        episodes={episodeWatches}
      />
    </div>
  )
}