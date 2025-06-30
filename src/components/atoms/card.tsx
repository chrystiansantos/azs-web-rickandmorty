import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div
      className="p-1 pb-4 border border-zinc-800 rounded-xl bg-zinc-900 fill-slate-500 drop-shadow-lg drop-shadow-slate-500/90 hover:drop-shadow-slate-100/90 transition-all  duration-300"
    >
      {children}
    </div>
  )
}