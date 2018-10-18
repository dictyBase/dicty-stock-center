import React from "react"
import "jest-styled-components"
import "../../setupTests"
import SubmitButton from "./SubmitButton"
import { shallow } from "enzyme"
import { PrimaryLargeButton } from "styles"

describe("form/SubmitButton", () => {
  let wrapper = shallow(
    <SubmitButton submitting={false} name={"Submit"} icon={"Submit"} />,
  )

  it("Should render as a <button>.", () => {
    expect(wrapper.is(PrimaryLargeButton)).toEqual(true)
  })
})
