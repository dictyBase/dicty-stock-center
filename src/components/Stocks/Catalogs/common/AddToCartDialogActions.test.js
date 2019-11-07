import React from "react"
import { shallow } from "enzyme"
import AddToCartDialogActions from "./AddToCartDialogActions"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import sinon from "sinon"

describe("Stocks/Catalogs/common/AddToCartDialogActions", () => {
  describe("initial render", () => {
    const setDialogOpenSpy = sinon.spy()
    const setHoverSpy = sinon.spy()
    const setCheckedItemsSpy = sinon.spy()
    const props = {
      setDialogOpen: setDialogOpenSpy,
      setHover: setHoverSpy,
      setCheckedItems: setCheckedItemsSpy,
    }
    const wrapper = shallow(<AddToCartDialogActions {...props} />)

    it("always renders initial components", () => {
      expect(wrapper.find(DialogActions)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
    })
  })
  describe("button clicking", () => {
    const setDialogOpenSpy = sinon.spy()
    const setHoverSpy = sinon.spy()
    const setCheckedItemsSpy = sinon.spy()

    it("calls correct functions when setHover is passed as prop", () => {
      const props = {
        setDialogOpen: setDialogOpenSpy,
        setHover: setHoverSpy,
        setCheckedItems: setCheckedItemsSpy,
      }
      const wrapper = shallow(<AddToCartDialogActions {...props} />)
      wrapper
        .find(Button)
        .first()
        .simulate("click")
      expect(setDialogOpenSpy.calledOnce).toBe(true)
      expect(setHoverSpy.calledOnce).toBe(true)
      expect(setCheckedItemsSpy.calledOnce).toBe(false)
    })

    it("calls correct functions when setHover is not passed as prop", () => {
      const props = {
        setDialogOpen: setDialogOpenSpy,
        setCheckedItems: setCheckedItemsSpy,
      }
      const wrapper = shallow(<AddToCartDialogActions {...props} />)
      setDialogOpenSpy.resetHistory()
      setHoverSpy.resetHistory()
      wrapper
        .find(Button)
        .first()
        .simulate("click")
      expect(setDialogOpenSpy.calledOnce).toBe(true)
      expect(setCheckedItemsSpy.calledOnce).toBe(true)
      expect(setHoverSpy.calledOnce).toBe(false)
    })
  })
})
