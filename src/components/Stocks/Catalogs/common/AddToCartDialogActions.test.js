import React from "react"
import { shallow } from "enzyme"
import AddToCartDialogActions from "./AddToCartDialogActions"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"

describe("Stocks/Catalogs/common/AddToCartDialogActions", () => {
  describe("initial render", () => {
    const props = {
      setCheckedItems: jest.fn(),
    }
    const wrapper = shallow(<AddToCartDialogActions {...props} />)

    it("always renders initial components", () => {
      expect(wrapper.find(DialogActions)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
    })
  })
  describe("button clicking", () => {
    const setCheckedItemsSpy = jest.fn()

    it("calls correct functions when setCheckedItems is passed as prop", () => {
      const props = {
        setCheckedItems: setCheckedItemsSpy,
      }
      const wrapper = shallow(<AddToCartDialogActions {...props} />)
      wrapper
        .find(Button)
        .first()
        .simulate("click")
      expect(setCheckedItemsSpy).toHaveBeenCalled()
    })
  })
})
