import React from "react"
import { shallow } from "enzyme"
import PaymentPageLeftColumn from "./PaymentPageLeftColumn"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "../AddressFields"

describe("OrderForm/Payment/PaymentPageLeftColumn", () => {
  const props = {
    values: {
      country: "usa",
    },
  }
  const wrapper = shallow(<PaymentPageLeftColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(AddressFields)).toHaveLength(1)
    })
  })
})
