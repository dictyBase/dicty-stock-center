import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class Slideshow extends Component {
  displayName = 'front page carousel'

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
          <img src="https://i.imgur.com/SqHpamt.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/gP5FAAf.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/pgX6ZhN.png" alt="" />
        </div>
        <div>
          <img src="https://i.imgur.com/6srEh3F.png" alt="" />
        </div>
        <div>
          <img src="http://betatest.dictybase.org/images/dictyFront01.jpg" alt="" />
        </div>
      </Carousel>
    )
  }
}
