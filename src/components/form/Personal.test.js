import React from "react"
import "jest-styled-components"
import "../../setupTests"
import Personal from "./Personal"
import FormGroupInput from "./FormGroupInput"
import { shallow } from "enzyme"
import { RequiredText } from "styles"

describe("form/Personal", () => {
  const firstName = { value: "John", touched: true }
  const lastName = { value: "Smith", touched: true }
  const email = { value: "john@gmail.com", touched: true }

  const wrapper = shallow(
    <Personal firstName={firstName} lastName={lastName} email={email} />,
  )

  it("should render firstName field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={firstName}>
          <RequiredText>* </RequiredText>
          First Name:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render lastName field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={lastName}>
          <RequiredText>* </RequiredText>
          Last Name:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render email field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={email}>
          <RequiredText>* </RequiredText>
          Email:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
})
