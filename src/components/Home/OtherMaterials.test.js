import React from "react"
import "jest-styled-components"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import { OtherMaterials } from "./OtherMaterials"
import InlineEditor from "components/InlineEditor"
import Grid from "@material-ui/core/Grid"

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

    it("always renders two Grid components", () => {
      expect(otherMaterialsPage().find(Grid).length).toBe(2)
    })
    it("calls componentDidMount", () => {
      sinon.spy(OtherMaterials.prototype, "componentDidMount")
      otherMaterialsPage()
      expect(OtherMaterials.prototype.componentDidMount.calledOnce).toEqual(
        true,
      )
    })
  })

  describe("after content is fetched", () => {
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
        isFetching: false,
      }
    })

    it("renders InlineEditor", () => {
      const wrapper = shallow(<OtherMaterials {...props} />)
      expect(wrapper.find(InlineEditor).length).toBe(1)
    })

    it("no longer renders Grid", () => {
      const wrapper = shallow(<OtherMaterials {...props} />)
      expect(wrapper.find(Grid).length).toBe(0)
    })
  })
})
