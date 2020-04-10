import React from "react"
import { mount } from "enzyme"
import OtherError from "./OtherError"
import ErrorMessage from "features/Errors/ErrorMessage"

describe("Stocks/Catalogs/common/OtherError", () => {
  const wrapper = mount(<OtherError />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ErrorMessage)).toHaveLength(1)
    })
    it("contains expected error message", () => {
      expect(wrapper.text()).toContain(
        "Sorry, we are experiencing technical difficulties.",
      )
    })
  })
})
