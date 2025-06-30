import { Home } from "@/components/templates";
import { cookies } from "next/headers";

export default async function HomePage() {
  const cookieStore = await cookies();
  const favorite = cookieStore.get("favorite");
  const watches = cookieStore.get("watch");

  const episodeFavorites = favorite ? JSON.parse(favorite.value) : []
  const episodeWatches = watches ? JSON.parse(watches.value) : []

  return (
    <Home
      episodeFavorites={episodeFavorites}
      episodeWatches={episodeWatches}
    />
  );
}
