import React from "react"
import { mount } from "enzyme"
import { OrderFormWrapper } from "utils/testing"
import CountryDropdown, { countryToFlag } from "./CountryDropdown"
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
