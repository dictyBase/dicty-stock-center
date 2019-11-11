import React from "react"
import { mount } from "enzyme"
import LeftCardHeader from "./LeftCardHeader"
import Typography from "@material-ui/core/Typography"

describe("Stocks/DetailsPageItems/LeftCardHeader", () => {
  const props = {
    stockType: "Plasmid",
    species: "human",
  }
  const wrapper = mount(<LeftCardHeader {...props} />)
  describe("initial render", () => {
    it("always renders Typography", () => {
      expect(wrapper.find(Typography).exists()).toBe(true)
    })
    it("matches prop values", () => {
      expect(wrapper.prop("stockType")).toEqual(props.stockType)
      expect(wrapper.prop("species")).toEqual(props.species)
    })
  })
})
