// import { gql } from "@apollo/client";

// type Characters = {
//   id: string
// }

// type Episode = {
//   id: string
//   name: string
//   air_date: string
//   episode: string
//   created: string
//   characters: Characters[]
// }

// type ResponseInfo = {
//   count: number
//   pages: number
//   next: number
//   prev: null
// }

// export type EpisodeListData = {
//   episodes: {
//     info: ResponseInfo
//     results: Episode[]
//   }
// }

// export const EPISODES_QUERY = gql`
//   query episodes($page: Int!) {
//   episodes(page: $page) {
//       info {
//       count
//       pages
//       next
//       prev
//     },
//     results {
//       id,
//       name,
//       air_date,
//       episode,
//       created,
//       characters {
//         id,
//       },
//     }
//   }
// }
// `

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