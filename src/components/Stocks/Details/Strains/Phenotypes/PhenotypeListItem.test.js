import React from "react"
import { shallow } from "enzyme"
import PhenotypeListItem from "./PhenotypeListItem"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import { data } from "./mockPhenotypeData"

describe("Stocks/Details/Strains/Phenotypes/PhenotypeListItem", () => {
  const wrapper = shallow(<PhenotypeListItem data={data[1]} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBe(true)
    })
    it("should have two divs when both assay and environment are present", () => {
      expect(wrapper.find("div")).toHaveLength(2)
    })
  })
})
