import React from "react"
import { shallow } from "enzyme"
import ShippingPageLeftColumn from "./ShippingPageLeftColumn"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "../AddressFields"

describe("OrderForm/Shipping/ShippingPageLeftColumn", () => {
  const props = {
    values: {
      country: "usa",
    },
  }
  const wrapper = shallow(<ShippingPageLeftColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(AddressFields)).toHaveLength(1)
    })
  })
})
