import React from "react"
import renderer from "react-test-renderer"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "jest-styled-components"
import "../../setupTests"
import { About } from "./About"
import InlineEditor from "components/InlineEditor"
import { Flex } from "rebass"

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

    it("always renders Flex", () => {
      expect(aboutPage().find(Flex).length).toBe(1)
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

    it("no longer renders Flex", () => {
      const wrapper = shallow(<About {...props} />)
      expect(wrapper.find(Flex).length).toBe(0)
    })
  })
})

test("matching a snapshot of About", () => {
  const fetchInfoPage = jest.fn()
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
