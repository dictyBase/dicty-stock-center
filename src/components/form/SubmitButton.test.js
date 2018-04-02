import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import SubmitButton from "./SubmitButton"
import { shallow } from "enzyme"
import { PrimaryLargeButton } from "styles"

describe("form/SubmitButton", () => {
  let wrapper = shallow(
    <SubmitButton submitting={false} name={"Submit"} icon={"Submit"} />
  )

  it("Should render as a <button>.", () => {
    expect(wrapper.is(PrimaryLargeButton)).toEqual(true)
  })
})

test("matching a snapshot of SubmitButton", () => {
  const component = renderer.create(
    <SubmitButton submitting={false} name={"Submit"} icon={"Submit"} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
