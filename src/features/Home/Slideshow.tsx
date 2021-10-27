import React from "react"
import { Carousel } from "react-responsive-carousel"
import { makeStyles } from "@material-ui/core/styles"
import ctr9 from "common/assets/slideshow-images/ctr9-mutant-DG1071.png"
import gbqA from "common/assets/slideshow-images/gbqA-mutant-DG1120.png"
import ggtA from "common/assets/slideshow-images/ggtA-mutant-DG1109.png"
import tipB from "common/assets/slideshow-images/tipB-mutant-DG1036.png"

import ctr9_avif from "common/assets/slideshow-images/ctr9-mutant-DG1071.avif"
import gbqA_avif from "common/assets/slideshow-images/gbqA-mutant-DG1120.avif"
import ggtA_avif from "common/assets/slideshow-images/ggtA-mutant-DG1109.avif"
import tipB_avif from "common/assets/slideshow-images/tipB-mutant-DG1036.avif"

import ctr9_webp from "common/assets/slideshow-images/ctr9-mutant-DG1071.webp"
import gbqA_webp from "common/assets/slideshow-images/gbqA-mutant-DG1120.webp"
import ggtA_webp from "common/assets/slideshow-images/ggtA-mutant-DG1109.webp"
import tipB_webp from "common/assets/slideshow-images/tipB-mutant-DG1036.webp"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import DictyImage from "common/components/DictyImage"

const useStyles = makeStyles({
  container: {
    marginBottom: "24px",
  },
})

/**
 * Slideshow is an image slideshow carousel with curated dicty photos.
 */

const Slideshow = () => {
  const classes = useStyles()

  return (
    <Carousel
      className={classes.container}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay
      interval={5000}
      infiniteLoop>
      <div>
        <DictyImage
          src={ctr9}
          nextGenSources={[
            {
              srcSet: ctr9_webp,
              type: "image/webp",
            },
            {
              srcSet: ctr9_avif,
              type: "image/avif",
            },
          ]}
          alt="ctr9-mutant-DG1071"
        />
      </div>
      <div>
        <DictyImage
          src={gbqA}
          nextGenSources={[
            {
              srcSet: gbqA_webp,
              type: "image/webp",
            },
            {
              srcSet: gbqA_avif,
              type: "image/avif",
            },
          ]}
          alt="gbqA-mutant-DG1120"
        />
      </div>
      <div>
        <DictyImage
          src={ggtA}
          nextGenSources={[
            {
              srcSet: ggtA_webp,
              type: "image/webp",
            },
            {
              srcSet: ggtA_avif,
              type: "image/avif",
            },
          ]}
          alt="ggtA-mutant-DG1109"
        />
      </div>
      <div>
        <DictyImage
          src={tipB}
          nextGenSources={[
            {
              srcSet: tipB_webp,
              type: "image/webp",
            },
            {
              srcSet: tipB_avif,
              type: "image/avif",
            },
          ]}
          alt="tipB-mutant-DG1036"
        />
      </div>
    </Carousel>
  )
}

export default Slideshow
