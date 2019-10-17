import React from "react"
import { shallow } from "enzyme"
import MyDscHeader from "./MyDscHeader"

describe("MyDsc/MyDscHeader", () => {
  describe("initial render", () => {
    const wrapper = shallow(<MyDscHeader />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find("div")).toHaveLength(1)
      expect(wrapper.find("h2")).toHaveLength(1)
    })
  })
})
