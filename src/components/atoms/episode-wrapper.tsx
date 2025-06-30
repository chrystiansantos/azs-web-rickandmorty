'use client'
import { EpisodeListData, EPISODES_QUERY } from "@/queries";
import { useQuery } from "@apollo/client";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { EpisodeCard } from "../organism";

interface EpisodeWrapperProps {
  favorites: string[]
  episodes: string[]
}

export function EpisodeWrapper({ favorites, episodes }: EpisodeWrapperProps) {
  const loader = useRef(null);

  const { data, loading, fetchMore } = useQuery<EpisodeListData, { page: number }>(EPISODES_QUERY, {
    variables: { page: 1 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && data?.episodes.info.next) {
          fetchMore({
            variables: {
              page: data?.episodes.info.next
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const newEntries = fetchMoreResult.episodes.results;
              return {
                episodes: {
                  info: fetchMoreResult.episodes.info,
                  results: [...previousResult.episodes.results, ...newEntries],
                }
              };
            },
          })
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [fetchMore, data?.episodes.info.next]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-20 mt-40 pb-10 w-full">
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
      {
        (data?.episodes.info.next || loading) && (
          <div ref={loader} className="flex items-center justify-center p-10">
            <Loader className="animate-rotate" />
          </div>
        )
      }
    </>
  )
}