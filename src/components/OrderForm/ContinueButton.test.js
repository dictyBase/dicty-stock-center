import React from "react"
import { shallow, mount } from "enzyme"
import ContinueButton from "./ContinueButton"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

describe("OrderForm/ContinueButton", () => {
  const setPageNumSpy = jest.fn()
  const validProps = {
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
  describe("initial render", () => {
    const wrapper = shallow(<ContinueButton {...validProps} />)
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
  describe("clicking continue button with filled fields", () => {
    const wrapper = shallow(<ContinueButton {...validProps} />)
    it("should update page number on click", () => {
      const btn = wrapper.find(Button)
      btn.simulate("click")
      expect(setPageNumSpy).toHaveBeenCalledTimes(1)
    })
  })
  describe("clicking continue button with missing field", () => {
    const invalidProps = {
      fields: [
        "",
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
    const wrapper = mount(<ContinueButton {...invalidProps} />)
    it("should update page number on click", () => {
      const btn = wrapper.find(Button)
      btn.simulate("click")
      expect(setPageNumSpy).toHaveBeenCalled()
      expect(wrapper.prop("pageNum")).toBe(0)
    })
  })
})
