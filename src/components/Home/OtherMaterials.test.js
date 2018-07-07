import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { OtherMaterials } from "./OtherMaterials"

test("matching a snapshot of OtherMaterials", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {},
    },
  }

  const component = renderer.create(
    <OtherMaterials
      page={page}
      fetchInfoPage={fetchInfoPage}
      isFetching={false}
    />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe("Home/OtherMaterials", () => {
  const props = {
    page: {
      data: {
        attributes: {},
      },
    },
    fetchInfoPage: () => {},
    isFetching: false,
  }
  const slugName = "dsc-other-materials"

  it("calls componentDidMount", () => {
    sinon.spy(OtherMaterials.prototype, "componentDidMount")
    const wrapper = mount(<OtherMaterials {...props} />)
    expect(OtherMaterials.prototype.componentDidMount.calledOnce).toEqual(true)
  })
})
