interface IDictyImageProps {
  src: string
  avif?: string
  webp?: string
  alt?: string
  id?: string
  imgClassName?: string
  className?: string
  orientation?: "landscape" | "portrait"
}

// TODO: Move to separate repo
const DictyImage = ({
  src,
  avif,
  webp,
  alt,
  id,
  imgClassName,
  className,
  orientation,
}: IDictyImageProps) => {
  return (
    <picture className={className}>
      {avif ? <source srcSet={avif} type="image/avif" /> : <></>}
      {webp ? <source srcSet={webp} type="image/webp" /> : <></>}
      <img src={src} alt={alt} className={imgClassName} id={id} />
    </picture>
  )
}

export type { IDictyImageProps }
export default DictyImage
