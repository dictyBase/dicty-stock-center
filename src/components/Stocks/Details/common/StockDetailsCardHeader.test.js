import React from "react"
import { mount } from "enzyme"
import StockDetailsCardHeader from "./StockDetailsCardHeader"

describe("Stocks/DetailsPageItems/StockDetailsCardHeader", () => {
  const props = {
    type: "Plasmid",
  }
  const wrapper = mount(<StockDetailsCardHeader {...props} />)
  describe("initial render", () => {
    it("always renders one <h3> element", () => {
      expect(wrapper.find("h3")).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("type")).toEqual("Plasmid")
    })
  })
})
