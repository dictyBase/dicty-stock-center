import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "jest-styled-components"
import { About } from "./About"
import InlineEditor from "components/InlineEditor"
import Grid from "@material-ui/core/Grid"

describe("Home/About", () => {
  let props
  let mountedAboutPage
  const aboutPage = () => {
    if (!mountedAboutPage) {
      mountedAboutPage = mount(<About {...props} />)
    }
    return mountedAboutPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      fetchInfoPage: undefined,
      isFetching: undefined,
    }
    mountedAboutPage = undefined
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
      expect(aboutPage().find(Grid).length).toBe(2)
    })
    it("calls componentDidMount", () => {
      sinon.spy(About.prototype, "componentDidMount")
      aboutPage()
      expect(About.prototype.componentDidMount.calledOnce).toEqual(true)
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
      const wrapper = shallow(<About {...props} />)
      expect(wrapper.find(InlineEditor).length).toBe(1)
    })

    it("no longer renders Grid", () => {
      const wrapper = shallow(<About {...props} />)
      expect(wrapper.find(Grid).length).toBe(0)
    })
  })
})
