import { ReactNode } from "react"

interface CharacterNameProps {
  children: ReactNode
}

export function CharacterName({ children }: CharacterNameProps) {
  return (
    <strong className="text-xl font-semibold block">{children}</strong>
  )
}