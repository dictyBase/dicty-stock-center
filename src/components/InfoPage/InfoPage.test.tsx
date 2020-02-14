import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import { InfoPage } from "./InfoPage"
import InfoPageView from "./InfoPageView"
import Loader from "components/common/Loader"

describe("InfoPage/InfoPage", () => {
  let props
  let mountedInfoPage
  const infoPage = () => {
    if (!mountedInfoPage) {
      mountedInfoPage = mount(<InfoPage {...props} />)
    }
    return mountedInfoPage
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      fetchInfoPage: undefined,
      isFetching: undefined,
    }
    mountedInfoPage = undefined
  })

  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
              name: "order",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        fetchInfoPage: () => {},
        isFetching: true,
      }
    })

    it("always renders Loader", () => {
      expect(infoPage().find(Loader).length).toBe(1)
    })
    it("calls componentDidMount", () => {
      sinon.spy(InfoPage.prototype, "componentDidMount")
      infoPage()
      expect(InfoPage.prototype.componentDidMount.calledOnce).toEqual(true)
    })
  })

  describe("after content is fetched", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
              name: "order",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        fetchInfoPage: () => {},
        isFetching: false,
      }
    })

    it("renders InfoPageView", () => {
      const wrapper = shallow(<InfoPage {...props} />)
      expect(wrapper.find(InfoPageView).length).toBe(1)
    })

    it("no longer renders Loader", () => {
      const wrapper = shallow(<InfoPage {...props} />)
      expect(wrapper.find(Loader).length).toBe(0)
    })
  })
})
