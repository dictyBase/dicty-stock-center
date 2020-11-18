import React from "react"
import { mount } from "enzyme"
import StrainCatalogListItem from "./StrainCatalogListItem"
import { BrowserRouter } from "react-router-dom"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import { CartProvider } from "features/ShoppingCart/CartStore"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

describe("Stocks/Strains/Catalog/StrainCatalogListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            id: "DBS1234",
            label: "test strain",
            summary: "test summary",
            in_stock: true,
          },
        ],
      },
      index: 0,
      style: {},
    }
    const wrapper = mount(
      <CatalogProvider stockType="strain">
        <CartProvider>
          <BrowserRouter>
            <StrainCatalogListItem {...props} />
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
