export interface TimeProps {
  date: string
}

export function Time({ date }: TimeProps) {
  const dateFormat = new Intl.DateTimeFormat(
    'pt-BR'
  ).format(new Date(date))

  return (
    <time dateTime={new Date(date).toString()}>{dateFormat}</time>
  )
}