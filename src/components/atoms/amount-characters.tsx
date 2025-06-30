import { User } from "lucide-react"
import { ReactNode } from "react"
import { Typography } from "./typography"

interface AmountCharactersProps {
  children: ReactNode
}

export function AmountCharacters({ children }: AmountCharactersProps) {
  return (
    <Typography>
      <User />
      {children}
    </Typography>
  )
}