import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import ShoppingCartPage from "./ShoppingCartPage"
import ShoppingCartPageWithItems from "./ShoppingCartPageWithItems"
import ShoppingCartPageNoItems from "./ShoppingCartPageNoItems"
import { CartContext, cartReducer } from "./CartStore"

describe("ShoppingCart/ShoppingCartPage", () => {
  const MockProvider = ({ items }: any) => {
    const [state, dispatch] = React.useReducer(cartReducer, {
      addedItems: items,
      maxItemsInCart: false,
    })
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <ShoppingCartPage />
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
    const wrapper = mount(<MockProvider items={cartItems} />)
    it("always renders expected component", () => {
      expect(wrapper.find(ShoppingCartPageWithItems)).toHaveLength(1)
      expect(wrapper.find(ShoppingCartPageNoItems)).toHaveLength(0)
    })
  })
  describe("initial render without items", () => {
    const wrapper = mount(<MockProvider items={[]} />)
    it("always renders expected component", () => {
      expect(wrapper.find(ShoppingCartPageNoItems)).toHaveLength(1)
      expect(wrapper.find(ShoppingCartPageWithItems)).toHaveLength(0)
    })
  })
})
