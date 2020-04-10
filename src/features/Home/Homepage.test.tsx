import React from "react"
import { mount } from "enzyme"
import Homepage from "./Homepage"
import Grid from "@material-ui/core/Grid"
import EditablePanel from "./EditablePanel"
import BrowserWarning from "./BrowserWarning"
import HomepageColumn from "./HomepageColumn"
import { MockAuthProvider } from "common/utils/testing"

describe("Home/Homepage", () => {
  describe("initial render", () => {
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <Homepage />
      </MockAuthProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(EditablePanel)).toHaveLength(2)
      expect(wrapper.find(HomepageColumn)).toHaveLength(3)
    })
    it("should display user greeting when logged in", () => {
      expect(wrapper.find("h3").at(0).text()).toBe("Hello, Art Vandelay!")
    })
  })
  describe("browser warning", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)",
      configurable: true,
    })
    const mocks = []
    const wrapper = mount(
      <MockAuthProvider mocks={mocks}>
        <Homepage />
      </MockAuthProvider>,
    )
    it("should display BrowserWarning for IE 10", () => {
      expect(wrapper.find(BrowserWarning)).toHaveLength(1)
    })
  })
})
