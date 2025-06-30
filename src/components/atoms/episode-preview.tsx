import Image from "next/image";

interface EpisodePreviewProps {
  src: string
  episodeName: string
}

export function EpisodePreview({ src, episodeName }: EpisodePreviewProps) {
  return (
    <Image
      src={src}
      height={600}
      width={400}
      className="w-full h-[600px] object-fill"
      alt={`Preview referente ao episódio ${episodeName}.`}
    />
  )
}