import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { OtherMaterials } from "./OtherMaterials"
import { Flex } from "rebass"

describe("Home/OtherMaterials", () => {
  let props
  let mountedOtherMaterialsPage
  const otherMaterialsPage = () => {
    if (!mountedOtherMaterialsPage) {
      mountedOtherMaterialsPage = mount(<OtherMaterials {...props} />)
    }
    return mountedOtherMaterialsPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      fetchInfoPage: undefined,
      isFetching: undefined,
    }
    mountedOtherMaterialsPage = undefined
  })
  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
            },
          },
        },
        fetchInfoPage: () => {},
        isFetching: true,
      }
    })

    it("always renders Flex", () => {
      expect(otherMaterialsPage().find(Flex).length).toBe(1)
    })
    it("calls componentDidMount", () => {
      sinon.spy(OtherMaterials.prototype, "componentDidMount")
      otherMaterialsPage()
      expect(OtherMaterials.prototype.componentDidMount.calledOnce).toEqual(
        true,
      )
    })
  })
})

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
