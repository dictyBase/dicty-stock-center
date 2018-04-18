import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Personal from "./Personal"
import FormGroupInput from "./FormGroupInput"
import { shallow } from "enzyme"
import { RequiredText } from "styles"

describe("form/Personal", () => {
  const firstName = { value: "John", touched: true }
  const lastName = { value: "Smith", touched: true }
  const email = { value: "john@gmail.com", touched: true }

  const wrapper = shallow(
    <Personal firstName={firstName} lastName={lastName} email={email} />
  )

  it("should render firstName field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={firstName}>
          <RequiredText>* </RequiredText>
          First Name:
        </FormGroupInput>
      )
    ).toEqual(true)
  })
  it("should render lastName field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={lastName}>
          <RequiredText>* </RequiredText>
          Last Name:
        </FormGroupInput>
      )
    ).toEqual(true)
  })
  it("should render email field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={email}>
          <RequiredText>* </RequiredText>
          Email:
        </FormGroupInput>
      )
    ).toEqual(true)
  })
})

test("matching a snapshot of Personal", () => {
  const firstName = {
    value: "Jane",
    touched: true
  }
  const lastName = {
    value: "Doe",
    touched: true
  }
  const email = {
    value: "janedoe@gmail.com",
    touched: true
  }

  const component = renderer.create(
    <Personal firstName={firstName} lastName={lastName} email={email} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
