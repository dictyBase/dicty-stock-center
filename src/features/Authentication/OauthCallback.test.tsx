import React from "react"
import { mount } from "enzyme"
import OauthCallback from "./OauthCallback"
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
