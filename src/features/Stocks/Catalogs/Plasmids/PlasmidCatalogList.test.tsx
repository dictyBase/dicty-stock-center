import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { data } from "./mockPlasmidCatalogData"
import AutoSizer from "react-virtualized-auto-sizer"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("Stocks/Plasmids/PlasmidCatalogList", () => {
  const props = {
    data: data,
    fetchMore: jest.fn(),
    cursor: 0,
  }
  const wrapper = mount(
    <CartProvider>
      <CatalogProvider>
        <PlasmidCatalogList {...props} />
      </CatalogProvider>
    </CartProvider>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(CatalogListHeader)).toHaveLength(1)
      expect(wrapper.find(AutoSizer)).toHaveLength(1)
    })
  })
})
