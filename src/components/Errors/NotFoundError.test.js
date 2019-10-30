import React from "react"
import { shallow } from "enzyme"
import NotFoundError from "./NotFoundError"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

describe("Errors/NotFoundError", () => {
  const props = {
    error: "Strain not found",
  }
  const wrapper = shallow(<NotFoundError {...props} />).dive()
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(1)
    })
    it("displays error message", () => {
      expect(wrapper.find("h3").text()).toBe(props.error)
    })
  })
})
