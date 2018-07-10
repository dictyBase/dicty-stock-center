import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { Intro } from "./Intro"
import InlineEditor from "components/InlineEditor"
import { Flex } from "rebass"

describe("Home/Intro", () => {
  let props
  let mountedIntroPage
  const introPage = () => {
    if (!mountedIntroPage) {
      mountedIntroPage = mount(<Intro {...props} />)
    }
    return mountedIntroPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      fetchInfoPage: undefined,
      isFetching: undefined,
    }
    mountedIntroPage = undefined
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
      expect(introPage().find(Flex).length).toBe(1)
    })
    it("calls componentDidMount", () => {
      sinon.spy(Intro.prototype, "componentDidMount")
      introPage()
      expect(Intro.prototype.componentDidMount.calledOnce).toEqual(true)
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
      const wrapper = shallow(<Intro {...props} />)
      expect(wrapper.find(InlineEditor).length).toBe(1)
    })

    it("no longer renders Flex", () => {
      const wrapper = shallow(<Intro {...props} />)
      expect(wrapper.find(Flex).length).toBe(0)
    })
  })
})

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
