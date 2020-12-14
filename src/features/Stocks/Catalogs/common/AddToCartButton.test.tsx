import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  CartProvider,
  CartContext,
  cartReducer,
} from "features/ShoppingCart/CartStore"
import AddToCartDialog from "./AddToCartDialog"
import UnavailableButton from "./UnavailableButton"

const inStockProps = {
  data: [
    {
      id: "DBS123456",
      name: "test1",
      summary: "this is a test summary",
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
    },
  ],
  inStock: false,
}

describe("Stocks/Catalogs/common/AddToCartButton", () => {
  describe("button clicking", () => {
    const wrapper = mount(
      <CartProvider>
        <BrowserRouter>
          <AddToCartButton {...inStockProps} />
        </BrowserRouter>
      </CartProvider>,
    )
    it("renders expected initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
    it("should display AddToCartDialog on click", () => {
      wrapper.find(IconButton).simulate("click")
      expect(wrapper.find(AddToCartDialog)).toHaveLength(1)
    })
  })
  describe("button display when cart is full", () => {
    const MockedComponent = () => {
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

    const wrapper = mount(<MockedComponent />)

    it("should display expected components if cart is full", () => {
      expect(wrapper.find(UnavailableButton)).toHaveLength(1)
    })
  })

  describe("button display when item is unavailable", () => {
    const wrapper = mount(
      <CartProvider>
        <BrowserRouter>
          <AddToCartButton {...unavailableProps} />
        </BrowserRouter>
      </CartProvider>,
    )
    it("should display unavailable button if item unavailable", () => {
      expect(wrapper.find(UnavailableButton)).toHaveLength(1)
    })
  })
})
