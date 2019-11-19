import React from "react"
import { mount } from "enzyme"
import NotFoundError from "./NotFoundError"
import ErrorMessage from "components/Errors/ErrorMessage"

describe("Stocks/Catalogs/common/NotFoundError", () => {
  const wrapper = mount(<NotFoundError />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ErrorMessage)).toHaveLength(1)
    })
    it("contains expected error message", () => {
      expect(wrapper.text()).toContain("Please check your query and try again.")
    })
  })
})
