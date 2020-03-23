import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import CountryDropdown from "./CountryDropdown"
import Autocomplete from "@material-ui/lab/Autocomplete"

describe("OrderForm/CountryDropdown", () => {
  const wrapper = mount(
    <OrderFormWrapper>
      <CountryDropdown name={"Iceland"} />
    </OrderFormWrapper>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Autocomplete)).toHaveLength(1)
    })
  })
})
