import React from "react"
import "jest-styled-components"
import "../../setupTests"
import Address from "./Address"
import FormGroupInput from "components/form/FormGroupInput"
import FormGroupSelect from "components/form/FormGroupSelect"
import countryList from "forms/utils/countryList"
import { shallow } from "enzyme"
import { RequiredText } from "styles"

describe("form/Address", () => {
  const address = { value: "n michigan", touched: true }
  const address2 = { value: "floor 1", touched: true }
  const city = { value: "chicago", touched: true }
  const state = { value: "IL", touched: true }
  const zip = { value: "65222", touched: true }
  const country = { value: "USA", touched: true }

  const wrapper = shallow(
    <Address
      address={address}
      address2={address2}
      city={city}
      state={state}
      zip={zip}
      country={country}
    />,
  )

  it("should render address line_1 field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={address}>
          <RequiredText>* </RequiredText>
          Address:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render address line_2 field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={address2}>Address:</FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render city field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={city}>
          <RequiredText>* </RequiredText>
          City:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render state field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={state}>State/Province:</FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render zip field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={zip}>
          <RequiredText>* </RequiredText>
          ZIP:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render country field with the list of countries", () => {
    expect(
      wrapper.contains(
        <FormGroupSelect field={country} list={countryList}>
          <RequiredText>* </RequiredText>
          Country:
        </FormGroupSelect>,
      ),
    ).toEqual(true)
  })
})
