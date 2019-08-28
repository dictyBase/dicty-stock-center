import React from "react"
import { shallow } from "enzyme"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import PlasmidCatalogAppBarLeftMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarLeftMenu"
import PlasmidCatalogAppBarSearch from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarSearch"
import PlasmidCatalogAppBarRightMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarRightMenu"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBar", () => {
  describe("initial render", () => {
    const wrapper = shallow(<PlasmidCatalogAppBar />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(Grid)).toHaveLength(3)
      expect(wrapper.find(PlasmidCatalogAppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(PlasmidCatalogAppBarSearch)).toHaveLength(1)
      expect(wrapper.find(PlasmidCatalogAppBarRightMenu)).toHaveLength(1)
    })
  })
})
