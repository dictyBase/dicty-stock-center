import React from "react"

type PictureSource = {
  srcSet: string
  type: "image/webp" | "image/avif"
  orientation?: "landscape" | "portrait"
}

type DictyImageProps = {
  children: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  nextGenSources?: PictureSource[]
}

const DictyImage = ({ children, nextGenSources }: DictyImageProps) => {
  return (
    <picture>
      {nextGenSources?.map((s, i) => (
        <source
          media={`(orientation: ${
            s.orientation ? s.orientation : "landscape"
          })`}
          srcSet={s.srcSet}
          type={s.type}
          key={`dictyImg${i}`}
        />
      ))}
      {children}
    </picture>
  )
}

export type { DictyImageProps, PictureSource }
export default DictyImage
