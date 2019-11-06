import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { data } from "./mockPlasmidCatalogData"
import AutoSizer from "react-virtualized-auto-sizer"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/Catalogs/common/CatalogListHeader"
import { PlasmidCatalogProvider } from "./PlasmidCatalogContext"

describe("Stocks/Plasmids/PlasmidCatalogList", () => {
  const props = {
    data: data,
  }
  const wrapper = mount(
    <PlasmidCatalogProvider>
      <PlasmidCatalogList {...props} />
    </PlasmidCatalogProvider>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(CatalogListHeader)).toHaveLength(1)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
  })
})
