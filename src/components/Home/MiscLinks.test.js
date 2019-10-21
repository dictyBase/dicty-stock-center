import React from "react"
import { mount } from "enzyme"
import MiscLinks from "./MiscLinks"
import LinkList from "../LinkList"
import { BrowserRouter } from "react-router-dom"

describe("Home/MiscLinks", () => {
  const wrapper = mount(
    <BrowserRouter>
      <MiscLinks />
    </BrowserRouter>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LinkList)).toHaveLength(1)
    })
  })
})
