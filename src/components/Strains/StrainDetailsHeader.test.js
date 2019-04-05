import React from "react"
import { mount } from "enzyme"
import "../../setupTests"
import StrainDetailsHeader from "./StrainDetailsHeader"

describe("Strain/StrainDetailsHeader", () => {
  const props = {
    title: "DBS999999",
  }
  const wrapper = mount(<StrainDetailsHeader {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders one <h1> element", () => {
      expect(wrapper.find("h1")).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("title")).toEqual("DBS999999")
    })
  })
})
