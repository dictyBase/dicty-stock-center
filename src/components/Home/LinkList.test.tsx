import React from "react"
import { shallow } from "enzyme"
import LinkList from "./LinkList"
import { downloadLinks } from "constants/linkLists"
import { Link } from "react-router-dom"

describe("Home/LinkList", () => {
  const wrapper = shallow(<LinkList list={downloadLinks} bgColor="gray" />)
  describe("initial download links render", () => {
    it("handles RouterAware key correctly", () => {
      // no routeraware links
      expect(wrapper.find(Link)).toHaveLength(0)
    })
    it("displays Download header", () => {
      expect(wrapper.find("h3")).toHaveLength(1)
      expect(wrapper.find("h3").text()).toContain("Download / View")
    })
    it("displays <li> for every item in list", () => {
      expect(wrapper.find("li")).toHaveLength(4)
    })
  })
})
