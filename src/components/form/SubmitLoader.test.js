import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import SubmitLoader from "./SubmitLoader"
import { shallow } from "enzyme"

describe("form/SubmitLoader", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SubmitLoader />)
  })

  it("renders an animated fa icon", () => {
    const icon = wrapper.find("i.fa-spinner")
    expect(icon).toExist
  })
})

test("matching a snapshot of SubmitLoader", () => {
  const component = renderer.create(<SubmitLoader />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
