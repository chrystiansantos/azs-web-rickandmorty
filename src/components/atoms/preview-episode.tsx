import Image from "next/image";

interface PreviewEpisode {
  src: string
  alt: string
}

export function PreviewEpisode({ src, alt }: PreviewEpisode) {
  return (
    <Image
      src={src}
      alt={alt}
      height={400}
      width={400}
      className="w-full h-[600px] object-fill"
    />
  )
}