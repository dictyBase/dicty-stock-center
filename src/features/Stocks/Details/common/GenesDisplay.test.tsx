import React from "react"
import { shallow } from "enzyme"
import GenesDisplay, { Gene } from "./GenesDisplay"
import LinkTag from "common/components/LinkTag"

describe("Stocks/Details/common/GenesDisplay", () => {
  describe("initial render with genes", () => {
    const genes = [{ name: "sadA" }, { name: "gflB" }]
    const wrapper = shallow(<GenesDisplay genes={genes} />)
    it("renders one LinkTag for every gene", () => {
      expect(wrapper.find(LinkTag)).toHaveLength(2)
    })
  })
  describe("initial render with empty gene array", () => {
    const genes = [] as Gene[]
    const wrapper = shallow(<GenesDisplay genes={genes} />)
    it("renders no LinkTags if gene list is empty", () => {
      expect(wrapper.find(LinkTag)).toHaveLength(0)
    })
  })
})
