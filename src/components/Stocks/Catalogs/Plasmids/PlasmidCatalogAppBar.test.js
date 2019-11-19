import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogAppBar from "./PlasmidCatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import AppBarLeftMenu from "components/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "components/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "components/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogAppBar", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <CatalogProvider>
        <PlasmidCatalogAppBar />
      </CatalogProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(AppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(AppBarSearch)).toHaveLength(1)
      expect(wrapper.find(AppBarRightMenu)).toHaveLength(1)
    })
  })
})
