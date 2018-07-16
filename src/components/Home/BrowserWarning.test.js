import React from "react"
import toJson from "enzyme-to-json"
import { shallow } from "enzyme"
import "jest-styled-components"
import BrowserWarning from "./BrowserWarning"

test("renders correctly", () => {
  const subject = shallow(<BrowserWarning />)
  expect(toJson(subject)).toMatchSnapshot()
})
