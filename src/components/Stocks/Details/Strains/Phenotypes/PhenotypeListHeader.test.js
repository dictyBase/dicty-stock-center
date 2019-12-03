import React from "react"
import { mount } from "enzyme"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

describe("Stocks/Details/Strains/Phenotypes/PhenotypeListListHeader", () => {
  const wrapper = mount(<PhenotypeListListHeader />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBe(true)
    })
  })
})
