import React from "react"
import { mount } from "enzyme"
import AddToCartButton from "./AddToCartButton"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartProvider } from "components/ShoppingCart/CartStore"

describe("Stocks/CatalogTableItems/AddToCartButton", () => {
  const props = {
    rowHeight: "64",
    data: [
      {
        id: "DBS123456",
        name: "test1",
        summary: "this is a test summary",
      },
    ],
  }
  const wrapper = mount(
    <CartProvider>
      <AddToCartButton {...props} />
    </CartProvider>,
  )
  describe("initial render", () => {
    it("renders expected initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
