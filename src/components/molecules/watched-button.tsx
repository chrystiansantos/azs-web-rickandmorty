'use client'
import { useUpdateWatch } from "@/hooks";
import { BadgeCheck } from "lucide-react";
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from "../atoms";

interface WatchedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  isWatch: boolean
}

export function WatchedButton({ id, isWatch }: WatchedButtonProps) {
  const { hasWatched, watchEpisode } = useUpdateWatch({
    id,
    isWatch
  })

  return (
    <Button
      className="flex items-center gap-2 cursor-pointer"
      onClick={watchEpisode}
    >
      <BadgeCheck className={
        twMerge(
          "size-5 text-slate-300",
          hasWatched && "text-green-500"
        )
      } />
      Assitido
    </Button>
  )
}