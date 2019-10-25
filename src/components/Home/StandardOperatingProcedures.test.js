import React from "react"
import { shallow } from "enzyme"
import StandardOperatingProcedures from "./StandardOperatingProcedures"

describe("Home/StandardOperatingProcedures", () => {
  const wrapper = shallow(<StandardOperatingProcedures />)
  describe("initial render", () => {
    it("always renders initial elements", () => {
      expect(wrapper.dive().find("div")).toHaveLength(1)
      expect(wrapper.dive().find("a")).toHaveLength(1)
    })
  })
})
