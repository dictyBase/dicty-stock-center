import React from "react"
import { shallow } from "enzyme"
import BackButton from "./BackButton"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/BackButton", () => {
  const prevStepSpy = jest.fn()
  const props = {
    prevStep: prevStepSpy,
  }
  const wrapper = shallow(<BackButton {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("clicking back button", () => {
    it("should update step number on click", () => {
      const btn = wrapper.find(Button).first()
      btn.simulate("click")
      expect(prevStepSpy).toBeCalledTimes(1)
    })
  })
})
