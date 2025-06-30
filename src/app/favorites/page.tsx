import { Favorite } from "@/components/templates/favorites";
import { EpisodeByIds, EPISODES_DETAILS_BY_IDS_QUERY } from "@/queries";
import { query } from "@/services/ApolloClient";
import { cookies } from "next/headers";

export default async function FavoritePage() {
  const cookieStore = await cookies();
  const favorite = cookieStore.get("favorite");
  const favorites = JSON.parse(favorite?.value ?? '[]')

  const { data } = await query<EpisodeByIds, { ids: string[] }>({
    query: EPISODES_DETAILS_BY_IDS_QUERY,
    variables: {
      ids: favorites
    }
  });

  return (
    <Favorite episodeFavorites={data} />
  );
}
