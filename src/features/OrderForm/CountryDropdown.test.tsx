import React from "react"
import { mount } from "enzyme"
import CountryDropdown, { countryToFlag } from "./CountryDropdown"
import Autocomplete from "@material-ui/lab/Autocomplete"

const mockSetFieldValue = jest.fn()

jest.mock("formik", () => ({
  useField: jest.fn(() => [{}, {}]),
  useFormikContext: jest.fn(() => ({
    setFieldValue: mockSetFieldValue,
    values: {
      country: "Iceland",
    },
  })),
}))

describe("OrderForm/CountryDropdown", () => {
  const wrapper = mount(<CountryDropdown name={"country"} />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Autocomplete)).toHaveLength(1)
    })
  })
  // describe("handleChange", () => {
  //   wrapper.find(Autocomplete).simulate("change")
  //   wrapper.update()
  //   expect(mockSetFieldValue).toHaveBeenCalledTimes(1)
  // expect(useFormikContext).toHaveBeenCalledWith(1)
  // })
})

describe("OrderForm/countryToFlag", () => {
  it("should return expected string", () => {
    expect(countryToFlag("IS")).toBe("🇮🇸")
  })
  it("should return isoCode if String.fromCodePoint is invalid", () => {
    // @ts-ignore
    global.String.fromCodePoint = undefined
    expect(countryToFlag("IS")).toBe("IS")
  })
})
