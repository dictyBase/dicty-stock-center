import React from "react"
import { shallow } from "enzyme"
import { AddToCartDialog } from "./AddToCartDialog"
import Dialog from "@material-ui/core/Dialog"
import DialogTitleDisplay from "components/common/DialogTitleDisplay"
import AddToCartDialogContent from "./AddToCartDialogContent"
import AddToCartDialogActions from "./AddToCartDialogActions"

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
      setHover: jest.fn(),
      setCheckedItems: jest.fn(),
      dialogOpen: false,
      history: {},
    }
    const wrapper = shallow(<AddToCartDialog {...props} />)
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Dialog)).toHaveLength(1)
      expect(wrapper.find(DialogTitleDisplay)).toHaveLength(1)
      expect(wrapper.find(AddToCartDialogContent)).toHaveLength(1)
      expect(wrapper.find(AddToCartDialogActions)).toHaveLength(1)
    })
  })
})
