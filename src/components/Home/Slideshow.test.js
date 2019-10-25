import React from "react"
import { shallow } from "enzyme"
import Slideshow from "./Slideshow"
import { Carousel } from "react-responsive-carousel"

describe("Home/Slideshow", () => {
  const wrapper = shallow(<Slideshow />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Carousel)).toHaveLength(1)
    })
  })
})
