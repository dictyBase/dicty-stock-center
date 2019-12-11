import React from "react"
import { shallow } from "enzyme"
import HomepageColumn from "./HomepageColumn"
import Grid from "@material-ui/core/Grid"
import About from "./About"
import LinkList from "./LinkList"
import { miscLinks } from "constants/linkLists"

describe("Home/HomepageColumn", () => {
  const wrapper = shallow(
    <HomepageColumn
      components={[<About />, <LinkList list={miscLinks} bgColor="gray" />]}
    />,
  )
  describe("initial render", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Grid).exists()).toBe(true)
      expect(wrapper.find(About)).toHaveLength(1)
      expect(wrapper.find(LinkList)).toHaveLength(1)
    })
  })
})
