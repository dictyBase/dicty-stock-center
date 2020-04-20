import React from "react"
import { shallow } from "enzyme"
import SubmitPage from "./SubmitPage"
import ShoppingCartItemList from "features/ShoppingCart/ShoppingCartItemList"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"
import initialValues from "../utils/initialValues"

describe("OrderForm/Submit/SubmitPage", () => {
  const props = {
    formData: initialValues,
    prevStep: jest.fn(),
    setSubmitError: jest.fn(),
  }
  const wrapper = shallow(<SubmitPage {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(ShoppingCartItemList)).toHaveLength(1)
      expect(wrapper.find(SubmitPageBottomButtons)).toHaveLength(1)
    })
  })
})
