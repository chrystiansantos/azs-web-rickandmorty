import { User } from "lucide-react";

interface AmountCharactersParticipatedProps {
  amountCharacters: number
}

export function AmountCharactersParticipated({ amountCharacters }: AmountCharactersParticipatedProps) {
  return (
    <span
      className="flex items-center gap-1 text-base">
      <User className="size-5" />
      {amountCharacters}
    </span>
  )
}