import { Watches } from "@/components/templates/watches";
import { EpisodeByIds, EPISODES_DETAILS_BY_IDS_QUERY } from "@/queries";
import { query } from "@/services/ApolloClient";
import { cookies } from "next/headers";

export default async function WatchesPage() {
  const cookieStore = await cookies();
  const watch = cookieStore.get("watch");
  const watches = JSON.parse(watch?.value ?? '[]')

  const { data } = await query<EpisodeByIds, { ids: string[] }>({
    query: EPISODES_DETAILS_BY_IDS_QUERY,
    variables: {
      ids: watches
    }
  });

  return (
    <Watches
      episodeWatches={data}
    />
  );
}
