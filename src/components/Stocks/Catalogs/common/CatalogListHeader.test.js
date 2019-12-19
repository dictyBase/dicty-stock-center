import React from "react"
import { mount } from "enzyme"
import CatalogListHeader from "./CatalogListHeader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"
import { CartProvider } from "components/ShoppingCart/CartStore"

describe("Stocks/Catalogs/common/CatalogListHeader", () => {
  describe("initial render without checked items", () => {
    const props = {
      checkedItems: [],
      stockType: "strain",
    }
    const wrapper = mount(
      <CartProvider>
        <CatalogProvider>
          <CatalogListHeader {...props} />
        </CatalogProvider>
      </CartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(List)).toHaveLength(1)
      expect(wrapper.find(ListItem)).toHaveLength(1)
    })
  })
})
