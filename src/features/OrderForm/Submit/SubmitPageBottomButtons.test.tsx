import React from "react"
import { shallow } from "enzyme"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import BackButton from "../BackButton"
import SubmitButton from "./SubmitButton"
import initialValues from "../utils/initialValues"

describe("OrderForm/Submit/SubmitPageBottomButtons", () => {
  const props = {
    formData: initialValues,
    prevStep: jest.fn(),
    setSubmitError: jest.fn(),
  }
  const wrapper = shallow(<SubmitPageBottomButtons {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(BackButton)).toHaveLength(1)
      expect(wrapper.find(SubmitButton)).toHaveLength(1)
    })
  })
})
