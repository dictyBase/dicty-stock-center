import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import CountryDropdown from "./CountryDropdown"
import Select from "@material-ui/core/Select"

describe("OrderForm/CountryDropdown", () => {
  const props = {
    value: "Iceland",
    name: "Iceland",
  }
  const wrapper = mount(
    <OrderFormWrapper>
      <CountryDropdown {...props} />
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
