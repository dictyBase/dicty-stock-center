import React from "react"
import { mount } from "enzyme"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import { BrowserRouter } from "react-router-dom"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("Stocks/Plasmids/Catalog/PlasmidCatalogListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            id: "DBP1234",
            name: "test plasmid",
            summary: "test summary",
            in_stock: true,
          },
        ],
      },
      index: 0,
      style: {},
    }
    const wrapper = mount(
      <CatalogProvider>
        <CartProvider>
          <BrowserRouter>
            <PlasmidCatalogListItem {...props} />
          </BrowserRouter>
        </CartProvider>
      </CatalogProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Typography).exists()).toBe(true)
    })
  })
})
