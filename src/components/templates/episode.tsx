import { EpisodePreview } from "../atoms";
import {
  CharacterDescription,
  EpisodeHeader
} from "../molecules";
import { EpisodeDescription } from "../organism";

interface Character {
  id: string
  name: string
  gender: 'male' | 'female' | 'unknown'
  status: string
  image: string
}

interface EpisodeProps {
  id: string
  name: string
  episode: string
  air_date: string
  isFavorite: boolean
  isWatch: boolean
  characters: Character[]
}

export function Episode({
  id,
  name,
  episode,
  air_date,
  isFavorite,
  isWatch,
  characters
}: EpisodeProps) {
  return (
    <>
      <EpisodePreview
        src={`/episodes/${episode}.webp`}
        episodeName={name}
      />

      <div className="container mt-8">
        <EpisodeHeader episodeName={name} redirectUrl="/" />

        <EpisodeDescription
          id={id}
          episode={episode}
          airDate={air_date}
          isFavorite={isFavorite}
          isWatch={isWatch}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-20 mt-10 pb-40">
          {characters.map(character => (
            <CharacterDescription
              key={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              status={character.status}
            />
          ))}
        </div>
      </div>
    </>
  )
}