import React from "react"
import toJson from "enzyme-to-json"
import { shallow } from "enzyme"
import "jest-styled-components"
import Loader from "./Loader"

test("renders correctly", () => {
  const subject = shallow(<Loader />)
  expect(toJson(subject)).toMatchSnapshot()
})
