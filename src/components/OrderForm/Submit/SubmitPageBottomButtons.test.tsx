import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackButton from "../BackButton"

describe("OrderForm/Submit/SubmitPageBottomButtons", () => {
  const props = {
    pageNum: 2,
    setPageNum: jest.fn(),
    isSubmitting: false,
  }
  const wrapper = mount(
    <OrderFormWrapper>
      <SubmitPageBottomButtons {...props} />
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Button)).toExist()
      expect(wrapper.find(FontAwesomeIcon)).toExist()
      expect(wrapper.find(BackButton)).toHaveLength(1)
    })
  })
})
