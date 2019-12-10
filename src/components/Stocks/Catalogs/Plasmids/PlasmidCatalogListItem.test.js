import React from "react"
import { mount } from "enzyme"
import { PlasmidCatalogListItem } from "./PlasmidCatalogListItem"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"

const mockStore = configureMockStore()
const store = mockStore({
  cart: {
    addedItems: [
      { id: "DBP1234", name: "test plasmid", summary: "test summary" },
    ],
  },
})

describe("Stocks/Plasmids/Catalog/PlasmidCatalogListItem", () => {
  describe("initial render", () => {
    const props = {
      data: {
        item: [
          {
            id: "DBP1234",
            name: "test plasmid",
            summary: "test summary",
          },
        ],
      },
      index: 0,
      style: {},
    }
    const wrapper = mount(
      <CatalogProvider>
        <Provider store={store}>
          <BrowserRouter>
            <PlasmidCatalogListItem {...props} />
          </BrowserRouter>
        </Provider>
      </CatalogProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(Checkbox)).toHaveLength(1)
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Typography).exists()).toBe(true)
    })
  })
})
