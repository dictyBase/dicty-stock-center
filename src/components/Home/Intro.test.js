import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { Intro } from "./Intro"

test("matching a snapshot of Intro", () => {
  const fetchInfoPage = () => {}
  const page = {
    data: {
      attributes: {},
    },
  }

  const component = renderer.create(
    <Intro page={page} fetchInfoPage={fetchInfoPage} isFetching={false} />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe("Home/Intro", () => {
  const props = {
    page: {
      data: {
        attributes: {},
      },
    },
    fetchInfoPage: () => {},
    isFetching: false,
  }
  const slugName = "dsc-intro"

  it("calls componentDidMount", () => {
    sinon.spy(Intro.prototype, "componentDidMount")
    const wrapper = mount(<Intro {...props} />)
    expect(Intro.prototype.componentDidMount.calledOnce).toEqual(true)
  })
})
