import React from "react"
import { mount } from "enzyme"
import StrainCatalogAppBar from "./StrainCatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import StrainCatalogAppBarLeftMenu from "./StrainCatalogAppBarLeftMenu"
import StrainCatalogAppBarSearch from "./StrainCatalogAppBarSearch"
import AppBarRightMenu from "components/Stocks/CatalogPageItems/AppBar/AppBarRightMenu"
import { StrainCatalogProvider } from "./StrainCatalogContext"

describe("Stocks/Strains/Catalog/StrainCatalogAppBar", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <StrainCatalogProvider>
        <StrainCatalogAppBar />
      </StrainCatalogProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogAppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogAppBarSearch)).toHaveLength(1)
      expect(wrapper.find(AppBarRightMenu)).toHaveLength(1)
    })
  })
})
