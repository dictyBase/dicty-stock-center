import React from "react"
import { mount } from "enzyme"
import CatalogListHeaderButtons from "./CatalogListHeaderButtons"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "./AddToCartButton"
import {
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("Stocks/Catalogs/common/CatalogListHeaderButtons", () => {
  describe("initial render with checkedItems", () => {
    const MockedComponent = () => {
      const [state, dispatch] = React.useReducer(catalogReducer, {
        ...strainInitialState,
        checkedItems: [
          {
            id: "DBS123456",
            name: "testarooni",
            summary: "test1212",
          },
          {
            id: "DBS987654",
            name: "2 test 2 furious",
            summary: "another test",
          },
        ],
      })

      return (
        <CartProvider>
          <CatalogContext.Provider value={{ state, dispatch }}>
            <CatalogListHeaderButtons />
          </CatalogContext.Provider>
        </CartProvider>
      )
    }
    const wrapper = mount(<MockedComponent />)
    it("always renders initial components", () => {
      expect(wrapper.find(AddToCartButton)).toHaveLength(1)
      expect(wrapper.find(IconButton).exists()).toBe(true)
      expect(wrapper.find(FontAwesomeIcon).exists()).toBe(true)
    })
    it("displays correct text", () => {
      expect(wrapper.find("span").at(0).text()).toContain("2 items selected")
    })
  })

  describe("render with >12 items", () => {
    const MockedComponent = () => {
      const [state, dispatch] = React.useReducer(catalogReducer, {
        ...strainInitialState,
        checkedItems: new Array(13).fill({
          id: "DBS123456",
          name: "testarooni",
          summary: "test1212",
        }),
      })

      return (
        <CartProvider>
          <CatalogContext.Provider value={{ state, dispatch }}>
            <CatalogListHeaderButtons />
          </CatalogContext.Provider>
        </CartProvider>
      )
    }
    const wrapper = mount(<MockedComponent />)
    it("should not display cart button if combined items is more than 12", () => {
      expect(wrapper.find(AddToCartButton)).toHaveLength(0)
    })
  })
})
