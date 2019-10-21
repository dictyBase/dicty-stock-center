import React from "react"
import { mount } from "enzyme"
import Materials from "./Materials"
import LinkList from "../LinkList"
import { BrowserRouter } from "react-router-dom"

describe("Home/Materials", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Materials />
    </BrowserRouter>,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LinkList)).toHaveLength(1)
    })
  })
})
