import React from "react"
import { mount } from "enzyme"
import OauthCallback, { redirectUrlGenerator } from "./OauthCallback"
import { BrowserRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

describe("authentication/OauthCallback", () => {
  const globalAny = global as any
  const postMessageMock = jest.fn()
  const closeMock = jest.fn()
  globalAny.opener = {
    postMessage: postMessageMock,
  }
  globalAny.close = closeMock
  process.env.REACT_APP_BASENAME = "/stockcenter"
  const wrapper = mount(
    <BrowserRouter>
      <OauthCallback />
    </BrowserRouter>,
  )
  describe("initial render", () => {
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
    })
    it("renders expected text", () => {
      expect(wrapper.find("h1").text()).toBe(
        "Transferring to login system ........",
      )
    })
  })
  describe("window behavior", () => {
    it("should call post message on mount", () => {
      expect(postMessageMock).toHaveBeenCalled()
    })
    it("should close on unmount", () => {
      wrapper.unmount()
      expect(closeMock).toHaveBeenCalled()
    })
  })
})

describe("redirectUrlGenerator", () => {
  const globalAny: any = global
  const originURL = "http://localhost:3000"
  beforeEach(() => {
    delete globalAny.window.location
    globalAny.window.location = new URL(originURL)
  })
  afterEach(() => {
    delete process.env.REACT_APP_BASENAME
  })

  it("should handle empty string properly", () => {
    expect(redirectUrlGenerator("")).toEqual(originURL)
  })
  it("should handle '/' properly", () => {
    expect(redirectUrlGenerator("/")).toEqual(originURL)
  })
  it("should handle '/' first character properly", () => {
    expect(redirectUrlGenerator("/test")).toEqual(`${originURL}/test`)
  })
  it("should handle non-slash basenames properly", () => {
    expect(redirectUrlGenerator("test")).toEqual(`${originURL}/test`)
  })
})
