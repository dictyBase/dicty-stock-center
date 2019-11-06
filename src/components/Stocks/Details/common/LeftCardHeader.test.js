import React from "react"
import { mount } from "enzyme"
import LeftCardHeader from "./LeftCardHeader"
import Typography from "@material-ui/core/Typography"

describe("Stocks/DetailsPageItems/LeftCardHeader", () => {
  const props = {
    stockType: "Plasmid",
  }
  const wrapper = mount(<LeftCardHeader {...props} />)
  describe("initial render", () => {
    it("always renders one Typography component", () => {
      expect(wrapper.find(Typography)).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("stockType")).toEqual(props.stockType)
    })
  })
})
