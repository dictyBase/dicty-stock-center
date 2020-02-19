import React from "react"
import { shallow } from "enzyme"
import AuthLoader from "./AuthLoader"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("authentication/AuthLoader", () => {
  const wrapper = shallow(<AuthLoader />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
    it("displays expected text", () => {
      expect(wrapper.find("h1").text()).toBe("Logging in...")
    })
  })
})
