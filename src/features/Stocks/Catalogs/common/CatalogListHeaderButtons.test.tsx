import React from "react"
import { render, screen } from "@testing-library/react"
import CatalogListHeaderButtons from "./CatalogListHeaderButtons"
import {
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"

describe("features/Stocks/Catalogs/common/CatalogListHeaderButtons", () => {
  describe("initial render with checkedItems", () => {
    const MockComponent = () => {
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
    it("renders shopping cart button", () => {
      render(<MockComponent />)
      expect(
        screen.getByRole("button", { name: "Add to shopping cart" }),
      ).toBeInTheDocument()
    })
    it("displays correct text", () => {
      render(<MockComponent />)
      expect(screen.getByText(/2 items selected/)).toBeInTheDocument()
    })
  })

  describe("render with >12 items", () => {
    const MockComponent = () => {
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
    it("should not display cart button if combined items is more than 12", () => {
      render(<MockComponent />)
      expect(
        screen.queryByRole("button", { name: "Add to shopping cart" }),
      ).not.toBeInTheDocument()
    })
  })
})
