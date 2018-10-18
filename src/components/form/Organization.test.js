import React from "react"
import "jest-styled-components"
import "../../setupTests"
import Organization from "./Organization"
import FormGroupInput from "./FormGroupInput"
import { shallow } from "enzyme"
import { RequiredText } from "styles"

describe("form/Organization", () => {
  const org = { value: "Northwestern", touched: true }
  const group = { value: "dictybase", touched: true }

  const wrapper = shallow(<Organization org={org} group={group} />)

  it("should render organization field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={org}>
          <RequiredText title="required field">* </RequiredText>
          Organization:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
  it("should render lab/group field", () => {
    expect(
      wrapper.contains(
        <FormGroupInput field={group}>
          <RequiredText title="required field">* </RequiredText>
          Lab/Group:
        </FormGroupInput>,
      ),
    ).toEqual(true)
  })
})
