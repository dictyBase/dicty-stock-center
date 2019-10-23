import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/Submit/SubmitPageBottomButtons", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    pageNum: 2,
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<SubmitPageBottomButtons {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2)
    })
  })
  describe("clicking previous button", () => {
    it("should update page number on click", () => {
      // reset spy
      setPageNumSpy.resetHistory()
      const btn = wrapper
        .dive()
        .find(Button)
        .first()
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
