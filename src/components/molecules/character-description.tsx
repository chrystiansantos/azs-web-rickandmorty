import { CharacterName, Typography } from "../atoms";
import { CardCharacter } from "./card-character";

interface CharacterDescriptionProps {
  name: string
  gender: 'male' | 'female' | 'unknown'
  status: string
  image: string
}

export function CharacterDescription({ name, gender, status, image }: CharacterDescriptionProps) {
  return (
    <CardCharacter name={name} characterImage={image}>
      <CharacterName>{name}</CharacterName>
      <div className="flex gap-4 font-medium">
        <Typography>{gender}</Typography>
        <Typography>{status}</Typography>
      </div>
    </CardCharacter>
  )
}