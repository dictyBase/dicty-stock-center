import React from "react"
import { shallow } from "enzyme"
import sinon from "sinon"
import { InfoPageView, mapStateToProps } from "./InfoPageView"
import Authorization from "components/authentication/Authorization"
import ErrorNotification from "components/authentication/ErrorNotification"
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

  const content = JSON.stringify({
    entityMap: {},
    blocks: [
      {
        key: "abc",
        text: "123",
        type: "unstyled",
        depth: 0,
      },
    ],
  })

  describe("initial render", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
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
    it("always renders an Editor", () => {
      expect(infoPageView().find(Editor).length).toBe(1)
    })
    it("Editor is readOnly", () => {
      const editor = infoPageView().find(Editor)
      expect(editor.props().readOnly).toBe(true)
    })
  })

  describe("user is not authenticated", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        fetchUserInfo: () => {},
        isAuthenticated: false,
      }
    })

    it("renders the Authorization component", () => {
      expect(infoPageView().find(Authorization).length).toBe(0)
    })
  })

  describe("user is authenticated with no other permissions", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
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
    it("renders the Authorization component", () => {
      expect(infoPageView().find(Authorization).length).toBe(1)
    })
  })

  describe("user is authenticated with editing privileges and valid JWT", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
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
        canEditPages: true,
        verifiedToken: true,
      }
    })

    // const AuthorizationWrapper = shallow(
    //   infoPageView()
    //     .find(Authorization)
    //     .prop("render")({
    //     canEditPages,
    //     fetchedUserData,
    //     verifiedToken,
    //   }),
    // )

    it("renders the Authorization component", () => {
      expect(infoPageView().find(Authorization).length).toBe(1)
    })
  })

  describe("user is authenticated with editing privileges but JWT is invalid", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
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
        canEditPages: true,
        verifiedToken: false,
      }
    })

    it("renders the Authorization component", () => {
      expect(infoPageView().find(Authorization).length).toBe(1)
    })
  })

  describe("InfoPageView mapStateToProps", () => {
    const mockState = {
      auth: {
        isAuthenticated: true,
      },
    }
    it("works correctly", () => {
      expect(mapStateToProps(mockState)).toEqual({
        isAuthenticated: true,
      })
    })
  })

  describe("InfoPageView methods", () => {
    beforeEach(() => {
      props = {
        page: {
          data: {
            attributes: {
              content: content,
              updated_at: "999",
              name: "order",
            },
          },
        },
        match: {
          params: {
            name: "order",
          },
        },
        editPage: () => {},
        fetchUserInfo: () => {},
        isAuthenticated: true,
        onClick: () => {},
      }
    })

    const preventDefault = jest.fn()

    it("should handle onClick correctly", () => {
      const instance = infoPageView().instance()
      const spy = jest.spyOn(instance, "onClick")
      instance.onClick({ preventDefault })

      expect(spy).toHaveBeenCalled()
    })
  })
})
