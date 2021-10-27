interface INextGenSource {
  srcSet: string
  type: "image/webp" | "image/avif"
  orientation?: "landscape" | "portrait"
}

interface IDictyImageProps {
  src: string
  nextGenSources?: INextGenSource[]
  alt?: string
  id?: string
  imgClassName?: string
  className?: string
}

// TODO: Move to separate repo
const DictyImage = ({
  src,
  nextGenSources,
  alt,
  id,
  imgClassName,
  className,
}: IDictyImageProps) => {
  return (
    <picture className={className}>
      {nextGenSources?.map((s, i) => (
        <source
          media={`(orientation: ${
            s.orientation ? s.orientation : "landscape"
          })`}
          srcSet={s.srcSet}
          type={s.type}
          key={`dictyImg${alt}${i}`}
        />
      ))}
      <img src={src} alt={alt} className={imgClassName} id={id} />
    </picture>
  )
}

export type { IDictyImageProps, INextGenSource }
export default DictyImage
