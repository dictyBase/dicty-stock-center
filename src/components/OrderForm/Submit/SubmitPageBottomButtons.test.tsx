import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackButton from "../BackButton"

describe("OrderForm/Submit/SubmitPageBottomButtons", () => {
  const setPageNumSpy = sinon.spy()
  const props = {
    pageNum: 2,
    setPageNum: setPageNumSpy,
    isSubmitting: false,
  }
  const wrapper = shallow(<SubmitPageBottomButtons {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
      expect(wrapper.find(BackButton)).toHaveLength(1)
    })
  })
})
