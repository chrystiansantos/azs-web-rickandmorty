import { EpisodeByIds } from "@/queries";
import { SubTitle, Title } from "../atoms";
import { CardFavoriteWatched, EmptyData } from "../molecules";
import { HeaderNavigation } from "../organism";

interface WatchesProps {
  episodeWatches: EpisodeByIds
}

export function Watches({ episodeWatches: { episodesByIds } }: WatchesProps) {
  const hasEpisodes = episodesByIds.length > 0 && episodesByIds.find(episode => !!episode.id)

  return (
    <div className="container">
      <HeaderNavigation />
      <div className="mt-28 text-center max-w-3xl mx-auto">
        <Title>Episódio selecionados como assitidos</Title>
        <SubTitle>Os episódios apresentados aqui foram selecionados pelo próprio
          usuário como seus episódios assitidos.
        </SubTitle>
      </div>
      {!hasEpisodes && (
        <EmptyData
          title="Ops! Não há nada aqui..."
          subtitle="Nenhum episódio disponível no momento. Marque episódios como assitidos para vê-los aqui."
        />
      )}
      {
        hasEpisodes && (
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
        )
      }
    </div>
  )
}