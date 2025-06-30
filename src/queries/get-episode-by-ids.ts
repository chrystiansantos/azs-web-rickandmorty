import { gql } from "@apollo/client";

interface Episode {
  id: string
  name: string,
  episode: string,
  air_date: string,
}

export type EpisodeByIds = {
  episodesByIds: Episode[]
}

export const EPISODES_DETAILS_BY_IDS_QUERY = gql`
  query episodesByIds($ids: [ID!]!) {
    episodesByIds(ids: $ids){
      id,
      name,
      episode,
      air_date
    }
  }
`;