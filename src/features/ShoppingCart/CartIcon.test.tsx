import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import CartIcon from "./CartIcon"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
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
    const wrapper = mount(<MockComponent items={cartItems} />)
    it("correctly indicates items in cart", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Link)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.text()).toContain("(2)")
    })
    it("displays notice if cart is full", () => {
      expect(wrapper.find("span").text()).toBe("* cart full")
    })
  })
  describe("initial render with no items in cart", () => {
    const wrapper = mount(<MockComponent items={[]} />)
    it("correctly indicates no items in cart", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(Link)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.text()).toContain("(0)")
    })
  })
})
