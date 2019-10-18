import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import PlasmidCatalogAppBarLeftMenu from "components/Stocks/Plasmids/Catalog/PlasmidCatalogAppBarLeftMenu"
import AppBarSearch from "components/Stocks/CatalogPageItems/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarRightMenu"
import { PlasmidCatalogProvider } from "./PlasmidCatalogContext"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBar", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <PlasmidCatalogProvider>
        <PlasmidCatalogAppBar />
      </PlasmidCatalogProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(PlasmidCatalogAppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(AppBarSearch)).toHaveLength(1)
      expect(wrapper.find(AppBarRightMenu)).toHaveLength(1)
    })
  })
})
