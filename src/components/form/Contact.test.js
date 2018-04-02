import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import Contact from "./Contact"
import FormGroupInput from "./FormGroupInput"
import { shallow } from "enzyme"
import { RequiredText } from "styles"

describe("form/Contact", () => {
  const phone = { value: "", touched: true }
  const wrapper = shallow(<Contact phone={phone} />)

  it("should render an input field for phone number", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={phone}>
          <RequiredText title="required field">* </RequiredText>Phone:
        </FormGroupInput>
      )
    ).toEqual(true)
  })
})

test("matching a snapshot of Contact", () => {
  const phone = {
    value: "555-5555",
    touched: true
  }

  const component = renderer.create(<Contact phone={phone} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
