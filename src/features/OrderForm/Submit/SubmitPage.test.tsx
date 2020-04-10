import React from "react"
import { shallow } from "enzyme"
import SubmitPage from "./SubmitPage"
import ShoppingCartItemList from "features/ShoppingCart/ShoppingCartItemList"
import SubmitPageBottomButtons from "./SubmitPageBottomButtons"

describe("OrderForm/Submit/SubmitPage", () => {
  const props = {
    pageNum: 2,
    setPageNum: jest.fn(),
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
