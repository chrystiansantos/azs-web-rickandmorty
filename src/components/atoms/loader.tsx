import { Loader as LoaderIcon } from "lucide-react"
import { Ref } from "react"

interface LoaderProps {
  loaderRef: Ref<HTMLDivElement | null>
}

export function Loader({ loaderRef }: LoaderProps) {
  return (
    <div ref={loaderRef} className="flex items-center justify-center p-10">
      <LoaderIcon className="animate-rotate" />
    </div>

  )
}