import React from "react"
import renderer from "react-test-renderer"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "jest-styled-components"
import "../../setupTests"
import { About } from "./About"

test("matching a snapshot of About", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {},
    },
  }

  const component = renderer.create(
    <About page={page} fetchInfoPage={fetchInfoPage} isFetching={false} />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe("Home/About", () => {
  const props = {
    page: {
      data: {
        attributes: {},
      },
    },
    fetchInfoPage: () => {},
    isFetching: false,
  }
  const slugName = "dsc-about"

  it("calls componentDidMount", () => {
    sinon.spy(About.prototype, "componentDidMount")
    const wrapper = mount(<About {...props} />)
    expect(About.prototype.componentDidMount.calledOnce).toEqual(true)
  })
})
