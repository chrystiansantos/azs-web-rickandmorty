import { EpisodeListData, EPISODES_QUERY } from "@/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";

interface UseListDataProps {
  searchName: string
}

export function useListData({ searchName }: UseListDataProps) {
  const loader = useRef<HTMLDivElement | null>(null);

  const { data, loading, fetchMore } = useQuery<EpisodeListData, { page: number, name: string }>(EPISODES_QUERY, {
    variables: { page: 1, name: searchName },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && data?.episodes.info.next) {
          fetchMore({
            variables: {
              page: data?.episodes.info.next,
              name: searchName
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              return {
                episodes: {
                  info: fetchMoreResult.episodes.info,
                  results: [...previousResult.episodes.results, ...fetchMoreResult.episodes.results]
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
  }, [fetchMore, data?.episodes.info.next, searchName]);

  return {
    data,
    loading,
    loader
  }

}