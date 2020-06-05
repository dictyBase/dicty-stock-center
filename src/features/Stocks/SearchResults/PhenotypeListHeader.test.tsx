import React from "react"
import { shallow } from "enzyme"
import PhenotypeListHeader from "./PhenotypeListHeader"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

describe("Stocks/SearchResults/PhenotypeListHeader", () => {
  const wrapper = shallow(<PhenotypeListHeader />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBeTruthy()
      expect(wrapper.find(Hidden).exists()).toBeTruthy()
    })
  })
})
