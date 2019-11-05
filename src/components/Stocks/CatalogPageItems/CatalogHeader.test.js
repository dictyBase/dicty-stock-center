import React from "react"
import { mount } from "enzyme"
import CatalogHeader from "./CatalogHeader"

describe("Stocks/CatalogPageItems/CatalogHeader", () => {
  const props = {
    title: "Strain Catalog",
  }
  const wrapper = mount(<CatalogHeader {...props} />)
  describe("initial render", () => {
    it("always renders one <h1> element", () => {
      expect(wrapper.find("h1")).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("title")).toEqual(props.title)
    })
  })
})
