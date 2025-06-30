import { ChevronRight } from "lucide-react";
import { AmountCharactersParticipated, Link } from "../atoms";
import { WatchedButton } from "../molecules";

interface WatchedCharactersParticipateProps {
  id: string
  amountCharacters: number
  isWatch: boolean
}

export function WatchedCharactersParticipate({ id, amountCharacters, isWatch }: WatchedCharactersParticipateProps) {
  return (
    <div className="flex justify-between mt-4 text-zinc-100">
      <AmountCharactersParticipated amountCharacters={amountCharacters} />
      <WatchedButton id={id} isWatch={isWatch} />
      <Link href={`/episode/${id}`} className="flex border-0 pb-0 items-center">
        Detalhes
        <ChevronRight className="size-5" />
      </Link>
    </div>
  )
}