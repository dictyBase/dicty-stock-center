import React from "react"
import { Carousel } from "react-responsive-carousel"
import { makeStyles } from "@material-ui/core/styles"
import ctr9 from "common/assets/slideshow-images/ctr9-mutant-DG1071.png"
import gbqA from "common/assets/slideshow-images/gbqA-mutant-DG1120.png"
import ggtA from "common/assets/slideshow-images/ggtA-mutant-DG1109.png"
import tipB from "common/assets/slideshow-images/tipB-mutant-DG1036.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
        <img src={ctr9} alt="ctr9-mutant-DG1071" />
      </div>
      <div>
        <img src={gbqA} alt="gbqA-mutant-DG1120" />
      </div>
      <div>
        <img src={ggtA} alt="ggtA-mutant-DG1109" />
      </div>
      <div>
        <img src={tipB} alt="tipB-mutant-DG1036" />
      </div>
    </Carousel>
  )
}

export default Slideshow
