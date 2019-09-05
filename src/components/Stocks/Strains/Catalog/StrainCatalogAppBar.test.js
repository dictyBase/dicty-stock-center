import React from "react"
import { shallow } from "enzyme"
import StrainCatalogAppBar from "./StrainCatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import StrainCatalogAppBarLeftMenu from "./StrainCatalogAppBarLeftMenu"
import StrainCatalogAppBarSearch from "./StrainCatalogAppBarSearch"
import StrainCatalogAppBarRightMenu from "./StrainCatalogAppBarRightMenu"

describe("Stocks/Strains/Catalog/StrainCatalogAppBar", () => {
  describe("initial render", () => {
    const wrapper = shallow(<StrainCatalogAppBar />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(Grid)).toHaveLength(4)
      expect(wrapper.find(StrainCatalogAppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogAppBarSearch)).toHaveLength(1)
      expect(wrapper.find(StrainCatalogAppBarRightMenu)).toHaveLength(1)
    })
  })
})
