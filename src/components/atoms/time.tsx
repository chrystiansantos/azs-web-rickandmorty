import { convertDate } from "@/util"

export interface TimeProps {
  date: string
}

export function Time({ date }: TimeProps) {
  const dateFormatted = convertDate(date)

  return (
    <time dateTime={new Date(date).toString()}>{dateFormatted}</time>
  )
}