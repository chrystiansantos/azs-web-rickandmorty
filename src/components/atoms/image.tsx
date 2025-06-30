import NextImage, { ImageProps } from "next/image";

export function Image(props: ImageProps) {
  return (
    <NextImage
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props} />
  )
}