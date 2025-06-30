import { gql } from "@apollo/client";

interface Character {
  id: string
  name: string
  gender: 'male' | 'female' | 'unknown'
  status: string
  image: string
}

interface Episode {
  name: string,
  episode: string,
  air_date: string,
  characters: Character[]
}

export type EpisodeData = {
  episode: Episode
}

export const EPISODE_DETAIL_QUERY = gql`
  query episodes($id: ID!) {
    episode(id: $id){
      name,
      episode,
      air_date,
      characters {
        id,
        name,
        gender,
        status,
        image
      }
    }
}`;