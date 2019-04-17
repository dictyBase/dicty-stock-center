import React from "react"
import { shallow } from "enzyme"
import { PlasmidCatalogTable } from "./PlasmidCatalogTable"
import { data } from "./mockPlasmidCatalogData"
import { Table, Column, AutoSizer, InfiniteLoader } from "react-virtualized"
import Paper from "@material-ui/core/Paper"

describe("Stocks/Plasmids/PlasmidCatalogTable", () => {
  const props = {
    data: data,
    classes: {
      table: "table",
      flexContainer: "flexContainer",
      tableRowHover: "tableRowHover",
      cartButton: "cartButton",
    },
  }
  const wrapper = shallow(<PlasmidCatalogTable {...props} />)
  const infiniteLoader = wrapper.find(InfiniteLoader).dive()
  const autosizer = infiniteLoader.find(AutoSizer).dive()
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(InfiniteLoader)).toHaveLength(1)
      expect(infiniteLoader.find(AutoSizer)).toHaveLength(1)
      expect(autosizer.find(Table)).toHaveLength(1)
      expect(autosizer.find(Column)).toHaveLength(4)
    })
  })
})
