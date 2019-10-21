import React from "react"
import { shallow } from "enzyme"
import { Link } from "react-router-dom"
import MyDscBreadcrumbs from "./MyDscBreadcrumbs"

describe("MyDsc/MyDscBreadcrumbs", () => {
  describe("initial render", () => {
    const wrapper = shallow(<MyDscBreadcrumbs />)
    it("always renders initial components", () => {
      expect(wrapper.find("ol")).toHaveLength(1)
      expect(wrapper.find("li")).toHaveLength(2)
      expect(wrapper.find(Link)).toHaveLength(1)
    })
  })
})
