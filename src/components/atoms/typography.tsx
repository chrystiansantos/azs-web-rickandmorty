import { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
}

export function Typography({ children }: TypographyProps) {
  return (
    <span className="flex gap-1 items-center">{children}</span>
  )
}