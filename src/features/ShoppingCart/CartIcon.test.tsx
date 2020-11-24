import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CartIcon from "./CartIcon"
import { CartContext, cartReducer } from "./CartStore"

describe("ShoppingCart/CartIcon", () => {
  const MockComponent = ({ items }: any) => {
    let maxItems
    items.length > 0 ? (maxItems = true) : (maxItems = false)
    const [state, dispatch] = React.useReducer(cartReducer, {
      addedItems: items,
      maxItemsInCart: maxItems,
      showCartDialog: false,
    })
    return (
      <CartContext.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <CartIcon />
        </BrowserRouter>
      </CartContext.Provider>
    )
  }

  describe("initial render with items", () => {
    const cartItems = [
      {
        id: "DBS123",
        name: "test1",
        fee: "$30.00",
      },
      {
        id: "DBP456",
        name: "test2",
        fee: "$15.00",
      },
    ]
    it("correctly indicates items in cart", () => {
      render(<MockComponent items={cartItems} />)
      expect(screen.getByText("(2)")).toBeInTheDocument()
    })
    it("displays notice if cart is full", () => {
      render(<MockComponent items={cartItems} />)
      expect(screen.getByText("* cart full")).toBeInTheDocument()
    })
  })

  describe("initial render with no items in cart", () => {
    it("correctly indicates no items in cart", () => {
      render(<MockComponent items={[]} />)
      expect(screen.getByText("(0)")).toBeInTheDocument()
    })
  })
})
