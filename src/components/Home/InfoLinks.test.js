import React from "react"
import { shallow } from "enzyme"
import InfoLinks from "./InfoLinks"
import LinkList from "../LinkList"

describe("Home/InfoLinks", () => {
  const wrapper = shallow(<InfoLinks />)
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(LinkList)).toHaveLength(1)
    })
  })
})
