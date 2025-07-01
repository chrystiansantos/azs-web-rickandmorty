'use client'
import { useDebounceSearch, useListData } from "@/hooks";
import { EpisodeCard } from ".";
import { InputSearch } from "../atoms/input-search";
import { Loader } from "../atoms/loader";
import { EmptyData } from "../molecules";

interface EpisodeWrapperProps {
  favorites: string[]
  episodes: string[]
}

export function EpisodeWrapper({ favorites, episodes }: EpisodeWrapperProps) {
  const { debouncedSearch, setSearch } = useDebounceSearch()
  const { data, loading, loader } = useListData({ searchName: debouncedSearch })

  return (
    <>
      <InputSearch
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {!!data?.episodes.results.length &&
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-20 mt-20 pb-10 w-full">
          {data?.episodes.results.map(episode => (
            <EpisodeCard
              key={episode.id}
              id={episode.id}
              name={episode.name}
              air_date={episode.air_date}
              episode={episode.episode}
              amountCharacters={episode.characters.length}
              isFavorite={favorites.includes(episode.id)}
              isWatched={episodes.includes(episode.id)}
            />
          ))}
        </div>
      }
      {(data?.episodes.info.next || loading) && (
        <Loader loaderRef={loader} />
      )}
      {!data?.episodes.results.length && !loading && (
        <EmptyData
          title="Ops! Não há nada aqui..."
          subtitle="Ops! Não encontramos nenhum episódio com esses critérios. Que tal ajustar os filtros e tentar de novo?"
        />
      )}
    </>
  )
}