import React from "react"
import { shallow } from "enzyme"
import LeftColumn from "./LeftColumn"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "./AddressFields"

describe("OrderForm/LeftColumn", () => {
  const props = {
    page: "Shipping",
    countryName: "country",
    values: {
      country: "Iceland",
    },
  }
  const wrapper = shallow(<LeftColumn {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(AddressFields)).toHaveLength(1)
    })
  })
})
