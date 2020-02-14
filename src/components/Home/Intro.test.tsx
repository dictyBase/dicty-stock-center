import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import Intro from "./Intro"
import InlineEditor from "components/InlineEditor"
import Grid from "@material-ui/core/Grid"

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

    it("always renders two Grid components", () => {
      expect(introPage().find(Grid).length).toBe(2)
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

    it("no longer renders Grid", () => {
      const wrapper = shallow(<Intro {...props} />)
      expect(wrapper.find(Grid).length).toBe(0)
    })
  })
})
