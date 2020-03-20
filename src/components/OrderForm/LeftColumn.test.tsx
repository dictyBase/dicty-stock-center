import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import LeftColumn from "./LeftColumn"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "./AddressFields"

describe("OrderForm/LeftColumn", () => {
  const props = {
    page: "Shipping",
    countryName: "country",
  }
  const wrapper = mount(
    <OrderFormWrapper>
      <LeftColumn {...props} />
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(PanelWrapper)).toHaveLength(1)
      expect(wrapper.find(AddressFields)).toHaveLength(1)
    })
  })
})
