import React from "react"
import { shallow } from "enzyme"
import BackToHomepageButton from "./BackToHomepageButton"
import Button from "@material-ui/core/Button"

describe("BackToHomepageButton", () => {
  const wrapper = shallow(<BackToHomepageButton />)
  it("always renders one Button", () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  })
  it("displays the correct text", () => {
    expect(wrapper.find(Button).text()).toBe("Back to Homepage")
  })
})
