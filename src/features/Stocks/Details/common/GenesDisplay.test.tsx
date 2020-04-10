import React from "react"
import { shallow } from "enzyme"
import GenesDisplay from "./GenesDisplay"
import LinkTag from "features/Stocks/Details/common/LinkTag"

describe("Stocks/Details/common/GenesDisplay", () => {
  describe("initial render with genes", () => {
    const genes = ["sadA", "gflB"]
    const wrapper = shallow(<GenesDisplay genes={genes} />)
    it("renders one LinkTag for every gene", () => {
      expect(wrapper.find(LinkTag)).toHaveLength(2)
    })
  })
  describe("initial render with empty gene array", () => {
    const genes = [""]
    const wrapper = shallow(<GenesDisplay genes={genes} />)
    it("renders no LinkTags if gene list is empty", () => {
      expect(wrapper.find(LinkTag)).toHaveLength(0)
    })
  })
})
