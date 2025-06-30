import { Episode } from "@/components/templates/episode";
import { EPISODE_DETAIL_QUERY, EpisodeData } from "@/queries/get-episode-by-id";
import { query } from "@/services/ApolloClient";
import { cookies } from "next/headers";

export default async function EpisodePage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data } = await query<EpisodeData, { id: number }>({
    query: EPISODE_DETAIL_QUERY,
    variables: {
      id: Number(id)
    }
  });

  const cookieStore = await cookies();
  const favorite = cookieStore.get("favorite");
  const watch = cookieStore.get("watch");

  const hasFavorite = !!JSON.parse(favorite?.value ?? '[]').find(
    (episodeId: string) => episodeId === id)
  const hasWatch = !!JSON.parse(watch?.value ?? '[]').find(
    (episodeId: string) => episodeId === id)

  return (
    <Episode
      id={id}
      name={data.episode.name}
      episode={data.episode.episode}
      air_date={data.episode.air_date}
      characters={data.episode.characters}
      isFavorite={hasFavorite}
      isWatch={hasWatch}
    />
  );
}
