import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Tooltip from "@material-ui/core/Tooltip"
import {
  CartProvider,
  CartContext,
  cartReducer,
} from "features/ShoppingCart/CartStore"
import AddToCartDialog from "./AddToCartDialog"

describe("Stocks/Catalogs/common/AddToCartButton", () => {
  const props = {
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
  const wrapper = mount(
    <CartProvider>
      <BrowserRouter>
        <AddToCartButton {...props} />
      </BrowserRouter>
    </CartProvider>,
  )
  describe("initial render", () => {
    it("renders expected initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("button clicking", () => {
    it("should display AddToCartDialog on click", () => {
      wrapper.find(IconButton).simulate("click")
      expect(wrapper.find(AddToCartDialog)).toHaveLength(1)
    })
  })
  describe("alternate button display", () => {
    const MockedComponent = () => {
      const [state, dispatch] = React.useReducer(cartReducer, {
        addedItems: [],
        maxItemsInCart: true,
        showCartDialog: false,
      })

      return (
        <CartProvider>
          <CartContext.Provider value={[state, dispatch]}>
            <AddToCartButton {...props} />
          </CartContext.Provider>
        </CartProvider>
      )
    }

    const newWrapper = mount(<MockedComponent />)

    it("should display expected components if cart is full", () => {
      expect(newWrapper.find(Tooltip)).toHaveLength(1)
      expect(newWrapper.find(IconButton)).toHaveLength(1)
      expect(newWrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
})
