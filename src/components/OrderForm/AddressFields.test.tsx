import React from "react"
import { shallow } from "enzyme"
import AddressFields from "./AddressFields"
import CountryDropdown from "./CountryDropdown"
import TextField from "./TextField"

describe("OrderForm/AddressFields", () => {
  const props = {
    fields: [
      {
        name: "firstName",
        field: "First Name",
        required: true,
      },
      {
        name: "lastName",
        field: "Last Name",
        required: true,
      },
    ],
    setFieldValue: jest.fn(),
    countryValue: "country",
    countryName: "country",
  }
  const wrapper = shallow(<AddressFields {...props} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(CountryDropdown)).toHaveLength(1)
      expect(wrapper.find(TextField)).toHaveLength(2)
    })
  })
})
