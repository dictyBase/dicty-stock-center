import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import ContinueButton from "./ContinueButton"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/ContinueButton", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    fields: [
      "john",
      "doe",
      "johndoe@test.com",
      "northwestern",
      "dictybase",
      "123 fake st",
      "chicago",
      "60601",
      "usa",
      "1234567890",
      "999",
    ],
    pageNum: 0,
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<ContinueButton {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("clicking continue button", () => {
    it("should update page number on click", () => {
      const btn = wrapper.find(Button)
      btn.simulate("click")
      expect(setPageNumSpy.calledOnce).toBe(true)
    })
  })
})
