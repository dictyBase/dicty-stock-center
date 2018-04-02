import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import FormGroupInput from "./FormGroupInput"
import { shallow } from "enzyme"
import { HelpBlock } from "styles"

describe("form/FormGroupInput", () => {
  let wrapper = shallow(<FormGroupInput field={{ value: "", touched: true }} />)

  it("should render an input element", () => {
    expect(wrapper.find("input")).toExist
  })

  it("should render validation error messages properly", () => {
    const field = { value: "", touched: true, error: "required" }
    wrapper.setProps({ field })
    expect(wrapper.contains(<HelpBlock>{field.error}</HelpBlock>)).toEqual(true)
  })
})

test("matching a snapshot of FormGroupInput", () => {
  const field = {
    touched: true
  }

  const component = renderer.create(<FormGroupInput field={field} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
