import React from "react"
import "jest-styled-components"
import "../../setupTests"
import FormGroupSelect from "./FormGroupSelect"
import { shallow } from "enzyme"
import { HelpBlock } from "styles"

describe("form/FormGroupSelect", () => {
  let wrapper = shallow(
    <FormGroupSelect
      field={{ value: "", touched: true }}
      list={["USA", "Japan", "England"]}
    />,
  )

  it("should render a select element", () => {
    expect(wrapper.find("select")).toExist
  })

  it("should render validation error messages properly", () => {
    expect(wrapper.hasClass("help-block")).toEqual(false)

    const field = { value: "", touched: true, error: "required" }
    wrapper.setProps({ field })
    expect(wrapper.contains(<HelpBlock>{field.error}</HelpBlock>)).toEqual(true)
  })
})
