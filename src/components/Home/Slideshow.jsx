import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class Slideshow extends Component {
  displayName = 'front page image slideshow'

  render() {
      return (
      <Carousel
        showStatus={ false }
        showIndicators={ false }
        showThumbs={ false }
        autoPlay
        interval={ 5000 }
        infiniteLoop>
        <div>
          <img src="https://i.imgur.com/iFrIK6E.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/aQJoxgo.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/SYhCvdJ.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/28xvWRd.png" alt="" />
        </div>
      </Carousel>
    )
  }
}
