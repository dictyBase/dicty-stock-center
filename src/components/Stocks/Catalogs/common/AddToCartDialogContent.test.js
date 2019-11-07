import React from "react"
import { shallow } from "enzyme"
import AddToCartDialogContent from "./AddToCartDialogContent"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import { Link } from "react-router-dom"

describe("Stocks/Catalogs/common/AddToCartDialogContent", () => {
  describe("initial render with one item in cart", () => {
    const props = {
      data: [
        {
          id: "DBS0351367",
          label: "myoB-/[act15]:myoB(S332A)",
          summary: "myoB with S332A substitution expressed in myoB null",
        },
      ],
    }
    const wrapper = shallow(<AddToCartDialogContent {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(DialogContent)).toHaveLength(1)
      expect(wrapper.find(DialogContentText)).toHaveLength(1)
      expect(wrapper.find(Link)).toHaveLength(1)
    })
  })
})
