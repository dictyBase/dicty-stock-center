import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import {
  CartProvider,
  CartContext,
  cartReducer,
} from "features/ShoppingCart/CartStore"
import { fees } from "common/constants/fees"

const inStockProps = {
  data: [
    {
      id: "DBS123456",
      name: "test1",
      summary: "this is a test summary",
      fee: fees.STRAIN_FEE,
    },
  ],
  inStock: true,
  setCheckedItems: jest.fn(),
}

const unavailableProps = {
  data: [
    {
      id: "DBS123456",
      name: "test1",
      summary: "this is a test summary",
      fee: fees.STRAIN_FEE,
    },
  ],
  inStock: false,
}

type Props = typeof inStockProps | typeof unavailableProps

describe("Stocks/Catalogs/common/AddToCartButton", () => {
  const MockComponent = (props: Props) => {
    return (
      <CartProvider>
        <BrowserRouter>
          <AddToCartButton {...props} />
        </BrowserRouter>
      </CartProvider>
    )
  }

  describe("button clicking", () => {
    it("should display dialog on button click", () => {
      render(<MockComponent {...inStockProps} />)
      const button = screen.getByRole("button", {
        name: "Add to shopping cart",
      })
      expect(button).toBeInTheDocument()
      userEvent.click(button)
      expect(screen.getByText(/Added to Cart/)).toBeInTheDocument()
    })
  })

  describe("button display when item is unavailable", () => {
    it("should display unavailable button if item unavailable", () => {
      render(<MockComponent {...unavailableProps} />)
      const button = screen.getByRole("button", {
        name: "Item is currently unavailable",
      })
      expect(button).toBeInTheDocument()
      expect(button).toBeDisabled()
    })
  })

  describe("button display when cart is full", () => {
    const MockFullComponent = () => {
      const [state, dispatch] = React.useReducer(cartReducer, {
        addedItems: [],
        maxItemsInCart: true,
      })

      return (
        <CartProvider>
          <CartContext.Provider value={{ state, dispatch }}>
            <AddToCartButton {...inStockProps} />
          </CartContext.Provider>
        </CartProvider>
      )
    }
    it("should display disabled button if cart is full", () => {
      render(<MockFullComponent />)
      const button = screen.getByRole("button", {
        name: "Shopping cart is full",
      })
      expect(button).toBeInTheDocument()
      expect(button).toBeDisabled()
    })
  })
})
