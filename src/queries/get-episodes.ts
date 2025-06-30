import { gql } from "@apollo/client";

type Characters = {
  id: string
}

type Episode = {
  id: string
  name: string
  air_date: string
  episode: string
  created: string
  characters: Characters[]
}

type ResponseInfo = {
  count: number
  pages: number
  next: number
  prev: null
}

export type EpisodeListData = {
  episodes: {
    info: ResponseInfo
    results: Episode[]
  }
}

export const EPISODES_QUERY = gql`
  query Episodes($page: Int!, $name: String!) {
  episodes(page: $page,filter: {name: $name}) {
    info {
      count
      pages
      next
      prev
    },
    results {
      id,
      name,
      air_date,
      episode,
      created,
      characters {
        id,
      },
    }
  }
}
`