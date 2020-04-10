import React from "react"
import { shallow } from "enzyme"
import ErrorNotification from "./ErrorNotification"
import SnackbarContent from "@material-ui/core/SnackbarContent"

describe("authentication/ErrorNotification", () => {
  const wrapper = shallow(<ErrorNotification error="not a marine biologist" />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(SnackbarContent)).toHaveLength(1)
    })
  })
})
