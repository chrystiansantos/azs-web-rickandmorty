import { EpisodeByIds } from "@/queries";
import { SubTitle, Title } from "../atoms";
import { CardFavoriteWatched, EmptyData } from "../molecules";
import { HeaderNavigation } from "../organism";

interface FavoriteProps {
  episodeFavorites: EpisodeByIds
}

export function Favorite({ episodeFavorites: { episodesByIds } }: FavoriteProps) {
  const hasEpisodes = episodesByIds.length > 0 && episodesByIds.find(episode => !!episode.id)

  return (
    <div className="container">
      <HeaderNavigation />
      <div className="mt-28 text-center max-w-3xl mx-auto">
        <Title>Episodios selecionados como favoritos</Title>
        <SubTitle>Os episódios apresentados aqui foram selecionados pelo próprio
          usuário como seus favoritos. Essa escolha reflete momentos que mais
          marcaram sua experiência com a série
        </SubTitle>
      </div>

      {!hasEpisodes && (
        <EmptyData
          title="Ops! Não há nada aqui..."
          subtitle="Nenhum episódio disponível no momento. Adicione episódios aos favoritos para vê-los aqui."
        />
      )}
      {hasEpisodes && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-20 mt-40 pb-10 w-full">
          {episodesByIds.map(episode => (
            <CardFavoriteWatched
              key={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
            />
          ))}
        </div>
      )}
    </div>
  )
}