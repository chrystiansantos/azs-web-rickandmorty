import { ReactNode } from "react"

interface TitleEpisodeProps {
  children: ReactNode
}

export function TitleEpisode({ children }: TitleEpisodeProps) {
  return (
    <strong className="line-clamp-2">{children}</strong>
  )
}