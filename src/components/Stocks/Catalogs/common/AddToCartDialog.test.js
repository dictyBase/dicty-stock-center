import React from "react"
import { mount } from "enzyme"
import { BrowserRouter } from "react-router-dom"
import AddToCartDialog from "./AddToCartDialog"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import AddToCartDialogContent from "./AddToCartDialogContent"
import AddToCartDialogActions from "./AddToCartDialogActions"
import { CartProvider } from "components/ShoppingCart/CartStore"

describe("Stocks/CatalogPageItems/AddToCartDialog", () => {
  describe("initial render with one item in cart", () => {
    const props = {
      data: [
        {
          id: "DBS1234",
          label: "test strain",
          summary: "test summary",
        },
      ],
      setCheckedItems: jest.fn(),
    }
    const wrapper = mount(
      <CartProvider>
        <BrowserRouter>
          <AddToCartDialog {...props} />
        </BrowserRouter>
      </CartProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogTitleDisplay)).toHaveLength(1)
      expect(wrapper.find(AddToCartDialogContent)).toHaveLength(1)
      expect(wrapper.find(AddToCartDialogActions)).toHaveLength(1)
    })
  })
})
