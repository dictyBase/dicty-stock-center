import React from "react"
import { shallow } from "enzyme"
import StrainDetailsLeftCardHeader from "./StrainDetailsLeftCardHeader"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

describe("Stock/Details/Strains/StrainDetailsLeftCardHeader", () => {
  const handleChangeSpy = jest.fn()
  const props = {
    species: "Dictyostelium discoideum",
    value: 0,
    handleChange: handleChangeSpy,
    phenotypeLength: 3,
  }
  const wrapper = shallow(<StrainDetailsLeftCardHeader {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Typography).exists()).toBe(true)
      expect(wrapper.find(Tabs).exists()).toBe(true)
      expect(wrapper.find(Tab)).toHaveLength(2)
    })
  })
  describe("tab interaction", () => {
    it("calls handleChange on tab click", () => {
      wrapper.find(Tabs).simulate("change")
      wrapper.update()
      expect(handleChangeSpy).toHaveBeenCalled()
    })
  })
})
