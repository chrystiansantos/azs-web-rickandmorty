import { ReactNode } from "react"

interface SubTitleProps {
  children: ReactNode
}

export function SubTitle({ children }: SubTitleProps) {
  return (
    <p className="text-zinc-300 text-sm">
      {children}
    </p>
  )
}