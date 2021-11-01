import React, { ImgHTMLAttributes } from "react"

type PictureSource = {
  srcSet: string
  type: "image/webp" | "image/avif"
  orientation?: "landscape" | "portrait"
}

type DictyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /* not having alt defined here will result in a warning from yarn lint */
  alt: string
  nextGenSources?: PictureSource[]
}

const Source = ({ srcSet, type, orientation }: PictureSource) => {
  return (
    <source
      media={`(orientation: ${orientation ? orientation : "landscape"})`}
      srcSet={srcSet}
      type={type}
    />
  )
}

const DictyImage = ({ nextGenSources, alt, ...imgProps }: DictyImageProps) => {
  return (
    <picture>
      {nextGenSources?.map((sourceProps, i) => (
        <Source {...sourceProps} key={`dictyImg${i}`} />
      ))}
      <img alt={alt} {...imgProps} />
    </picture>
  )
}

export type { DictyImageProps, PictureSource }
export default DictyImage
