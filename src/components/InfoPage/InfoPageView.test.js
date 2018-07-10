import React from "react"
import { shallow, mount } from "enzyme"
import sinon from "sinon"
import "../../setupTests"
import { InfoPageView } from "./InfoPageView"
import { Container } from "styles"
import { Editor } from "draft-js"

describe("InfoPage/InfoPageView", () => {
  let props
  let mountedInfoPageView
  const infoPageView = () => {
    if (!mountedInfoPageView) {
      mountedInfoPageView = shallow(<InfoPageView {...props} />)
    }
    return mountedInfoPageView
  }

  beforeEach(() => {
    props = {
      page: undefined,
      match: undefined,
      editPage: undefined,
      fetchUserInfo: undefined,
      fetchedUserData: undefined,
      loggedInUser: undefined,
      isAuthenticated: undefined,
    }
    mountedInfoPageView = undefined
  })

  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
              updated_at: "999",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        fetchUserInfo: () => {},
      }
    })

    it("always renders a Container", () => {
      expect(infoPageView().find(Container).length).toBeGreaterThan(0)
    })
    it("always renders an Editor", () => {
      expect(infoPageView().find(Editor).length).toBeGreaterThan(0)
    })
    it("Editor is readOnly", () => {
      const editor = infoPageView().find(Editor)
      expect(editor)
        .props()
        .readOnly.toBe(true)
    })
  })

  describe("user is authenticated with no other permissions", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: "page content",
              updated_at: "999",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        fetchUserInfo: () => {},
        isAuthenticated: true,
      }
    })
    it("calls componentDidMount", () => {
      sinon.spy(InfoPageView.prototype, "componentDidMount")
      infoPageView()
      expect(InfoPageView.prototype.componentDidMount.calledOnce).toEqual(true)
    })
  })

  describe("user is authenticated with editing privileges and valid JWT", () => {
    // add tests here
  })

  describe("user is authenticated with editing privileges but JWT is invalid", () => {
    // add tests here
  })
})
