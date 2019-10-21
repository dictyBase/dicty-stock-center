import React from "react"
import { mount } from "enzyme"
import StockDetailsHeader from "./StockDetailsHeader"

describe("Stock/StockDetailsHeader", () => {
  const props = {
    title: "DBS999999",
  }
  const wrapper = mount(<StockDetailsHeader {...props} />)
  describe("initial render", () => {
    it("always renders one <h1> element", () => {
      expect(wrapper.find("h1")).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("title")).toEqual("DBS999999")
    })
  })
})
