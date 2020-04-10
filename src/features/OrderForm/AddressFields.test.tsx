import React from "react"
import { shallow } from "enzyme"
import AddressFields, { checkIfCountry } from "./AddressFields"
import CountryDropdown from "./CountryDropdown"
import TextField from "./TextField"

describe("OrderForm/AddressFields", () => {
  describe("initial render with country", () => {
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
        {
          name: "country",
          field: "Country",
          required: true,
        },
      ],
      countryName: "country",
    }
    const wrapper = shallow(<AddressFields {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(CountryDropdown)).toHaveLength(1)
      expect(wrapper.find(TextField)).toHaveLength(2)
    })
  })
  describe("initial render without country", () => {
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
      countryName: "country",
    }
    const wrapper = shallow(<AddressFields {...props} />)
    it("always renders initial components", () => {
      expect(wrapper.find(CountryDropdown)).toHaveLength(0)
      expect(wrapper.find(TextField)).toHaveLength(2)
    })
  })
})

describe("checkIfCountry", () => {
  it("should return true for expected country fields", () => {
    expect(checkIfCountry("country")).toBeTruthy()
    expect(checkIfCountry("payerCountry")).toBeTruthy()
  })
  it("should return false for wrong field", () => {
    expect(checkIfCountry("firstName")).toBeFalsy()
  })
})
