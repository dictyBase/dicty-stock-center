import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartProvider } from "components/ShoppingCart/CartStore"
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
  describe("handles button clicking correctly", () => {
    it("should display AddToCartDialog on click", () => {
      wrapper.find(IconButton).simulate("click")
      expect(wrapper.find(AddToCartDialog)).toHaveLength(1)
    })
  })
})
