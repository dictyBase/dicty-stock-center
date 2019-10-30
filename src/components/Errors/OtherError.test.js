import React from "react"
import { shallow } from "enzyme"
import OtherError from "./OtherError"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("Errors/OtherError", () => {
  const wrapper = shallow(<OtherError />).dive()
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
    it("displays error header", () => {
      expect(wrapper.find("h1").text()).toContain("Error")
    })
  })
})
