import { ArrowLeft } from "lucide-react";
import { Link, Title } from "../atoms";

interface EpisodeHeaderProps {
  redirectUrl: string
  episodeName: string
}

export function EpisodeHeader({ redirectUrl, episodeName }: EpisodeHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Link href={redirectUrl}>
        <ArrowLeft className="size-9" />
      </Link>
      <Title>{episodeName}</Title>
    </div>
  )
}