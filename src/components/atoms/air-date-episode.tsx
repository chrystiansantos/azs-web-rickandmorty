import { ReactNode } from "react"

interface AirDateEpisodeProps {
  children: ReactNode
}

export function AirDateEpisode({ children }: AirDateEpisodeProps) {
  return (
    <span className="text-zinc-500">
      {children}
    </span>
  )
}