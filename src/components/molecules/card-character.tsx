import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { Image } from "../atoms"

interface CardCharacterProps {
  name: string
  characterImage: string
  children: ReactNode
}

export function CardCharacter({ name, characterImage, children }: CardCharacterProps) {
  return (
    <div className={twMerge(
      "h-[300px] bg-white relative bg-cover bg-center bg-no-repeat",
    )}>
      <Image
        src={characterImage}
        alt={`Personagem ${name}`}
      />
      <div className="absolute bottom-0 flex flex-col items-center w-full bg-black/40 backdrop-blur-xs px-2 py-1 text-white justify-between">
        {children}
      </div>
    </div>
  )
}