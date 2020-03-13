import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import BackButton from "./BackButton"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/BackButton", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    pageNum: 2,
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<BackButton {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("clicking previous button", () => {
    it("should update page number on click", () => {
      setPageNumSpy.resetHistory()
      const btn = wrapper.find(Button).first()
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
