import React from "react"
import "jest-styled-components"
import "../../setupTests"
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
          <RequiredText title="required field">* </RequiredText>
          Phone:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
})
