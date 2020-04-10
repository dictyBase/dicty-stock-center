import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ShoppingCartItemList from "./ShoppingCartItemList"
import { CartContext, cartReducer } from "./CartStore"

describe("ShoppingCart/ShoppingCartItemList", () => {
  describe("initial render with both strains and plasmids", () => {
    const MockProvider = () => {
      const [state, dispatch] = React.useReducer(cartReducer, {
        addedItems: [
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
        ],
      })
      return (
        <CartContext.Provider value={[state, dispatch]}>
          <BrowserRouter>
            <ShoppingCartItemList />
          </BrowserRouter>
        </CartContext.Provider>
      )
    }
    const wrapper = mount(<MockProvider />)
    it("always renders initial components", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(List)).toHaveLength(1)
    })
  })
})
