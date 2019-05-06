import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { SubmitPage } from "./SubmitPage"
import { data } from "./mockSubmitData"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"

describe("OrderForm/Submit/SubmitPage", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    classes: {},
    items: data,
    setPageNum: setPageNumSpy,
  }
  const wrapper = shallow(<SubmitPage {...props} />)
  describe("initial render", () => {
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(9)
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(Button)).toHaveLength(2)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(3)
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
