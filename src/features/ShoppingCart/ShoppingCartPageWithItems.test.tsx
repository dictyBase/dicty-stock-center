import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { CartContext, cartReducer } from "./CartStore"

const MockFullComponent = () => {
  // @ts-ignore
  const [state, dispatch] = React.useReducer(cartReducer, {
    addedItems: [
      {
        id: "DBS123",
        name: "test1",
        fee: "$30.00",
      },
    ],
    maxItemsInCart: true,
    showCartDialog: false,
  })
  return (
    <CartContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <ShoppingCartPageWithItems />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

const MockEmptyComponent = () => {
  // @ts-ignore
  const [state, dispatch] = React.useReducer(cartReducer, {
    addedItems: [
      {
        id: "DBS123",
        name: "test1",
        fee: "$30.00",
      },
    ],
    maxItemsInCart: false,
    showCartDialog: false,
  })
  return (
    <CartContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <ShoppingCartPageWithItems />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

describe("ShoppingCart/ShoppingCartPageWithItems", () => {
  describe("initial render, non-full cart", () => {
    const wrapper = mount(<MockEmptyComponent />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(ShoppingCartItemList)).toHaveLength(1)
    })
    it("should find continue shopping button", () => {
      expect(wrapper.find(Button).at(1).text()).toContain("Continue Shopping")
    })
    it("should find checkout button", () => {
      expect(wrapper.find(Button).at(2).text()).toContain("Checkout")
    })
  })
  describe("initial render, full cart", () => {
    const wrapper = mount(<MockFullComponent />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(ShoppingCartItemList)).toHaveLength(1)
    })
    it("should find checkout button", () => {
      expect(wrapper.find(Button).at(1).text()).toContain("Checkout")
    })
  })
})
