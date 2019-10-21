import React from "react"
import { mount } from "enzyme"
import Downloads from "./Downloads"
import LinkList from "../LinkList"

describe("Home/Downloads", () => {
  const wrapper = mount(<Downloads />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LinkList)).toHaveLength(1)
    })
  })
})
