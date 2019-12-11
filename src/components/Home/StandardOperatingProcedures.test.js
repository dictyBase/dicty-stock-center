import React from "react"
import { shallow } from "enzyme"
import StandardOperatingProcedures from "./StandardOperatingProcedures"

describe("Home/StandardOperatingProcedures", () => {
  const wrapper = shallow(<StandardOperatingProcedures />)
  describe("initial render", () => {
    it("always renders initial elements", () => {
      expect(wrapper.find("div")).toHaveLength(1)
      expect(wrapper.find("a")).toHaveLength(1)
    })
  })
})
