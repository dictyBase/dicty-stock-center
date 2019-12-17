import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import ShoppingCartItem from "./ShoppingCartItem"
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartProvider } from "./CartStore"

describe("ShoppingCart/ShoppingCartItem", () => {
  describe("initial render", () => {
    const props = {
      item: {
        id: "DBP456",
        name: "test2",
        summary: "test plasmid",
        fee: "$15.00",
      },
    }
    const wrapper = mount(
      <CartProvider>
        <BrowserRouter>
          <ShoppingCartItem {...props} />
        </BrowserRouter>
      </CartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(ListItem)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(1)
    })
  })
})
