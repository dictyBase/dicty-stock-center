import React from "react"
import toJson from "enzyme-to-json"
import { shallow } from "enzyme"
import "jest-styled-components"
import Slideshow from "./Slideshow"

test("matching a snapshot of Home/Slideshow", () => {
  const subject = shallow(<Slideshow />)
  expect(toJson(subject)).toMatchSnapshot()
})
