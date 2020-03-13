import React from "react"
import { shallow } from "enzyme"
import PaymentInfoBox from "./PaymentInfoBox"
import Grid from "@material-ui/core/Grid"
import PaymentInfoBoxItems from "./PaymentInfoBoxItems"

describe("OrderForm/Payment/PaymentInfoBox", () => {
  const wrapper = shallow(<PaymentInfoBox />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid)).toHaveLength(2)
      expect(wrapper.find(PaymentInfoBoxItems)).toHaveLength(1)
    })
  })
})
