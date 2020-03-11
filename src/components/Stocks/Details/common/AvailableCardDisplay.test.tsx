import React from "react"
import { mount } from "enzyme"
import AvailableCardDisplay from "./AvailableCardDisplay"
import { BrowserRouter } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
// import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import { CartContext, cartReducer } from "components/ShoppingCart/CartStore"

describe("Stocks/Details/common/AvailableCardDisplay", () => {
  const props = {
    cartData: {
      id: "DBS1323456",
      name: "test strain",
      summary: "this is a test summary",
      type: "strain",
    },
  }

  const MockComponent = () => {
    const [state, dispatch] = React.useReducer(cartReducer, {
      addedItems: [],
      showCartDialog: false,
      maxItemsInCart: false,
    })
    return (
      <CartContext.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <AvailableCardDisplay {...props} />
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
  const wrapper = mount(<MockComponent />)

  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Typography).exists()).toBe(true)
      expect(wrapper.find(Divider).exists()).toBe(true)
      expect(wrapper.find(Button).exists()).toBe(true)
      expect(wrapper.find(TextField).exists()).toBe(true)
      // expect(wrapper.find(MenuItem).exists()).toBe(true)
      expect(wrapper.find(AddToCartButton)).toHaveLength(1)
    })
  })
  // describe("quantity dropdown", () => {
  //   it("should change value", () => {
  //     const text = wrapper.find(TextField)
  //     expect(text.prop("value")).toBe(1)
  //     text.simulate("change", {
  //       target: { value: 2 },
  //     })
  //     wrapper.setProps({ value: 2 })
  //     expect(wrapper.find(TextField).props().value).toBe(2)
  //   })
  // })
})
