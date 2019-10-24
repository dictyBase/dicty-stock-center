import React from "react"
import { shallow } from "enzyme"
import CountryDropdown from "./CountryDropdown"
import Select from "@material-ui/core/Select"

describe("OrderForm/CountryDropdown", () => {
  const props = {
    value: "Iceland",
    setFieldValue: jest.fn(),
  }
  const wrapper = shallow(<CountryDropdown {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
