import React from "react"
import { mount } from "enzyme"
import CatalogHeader from "./CatalogHeader"
import Typography from "@material-ui/core/Typography"

describe("Stocks/CatalogPageItems/CatalogHeader", () => {
  const props = {
    title: "Strain Catalog",
  }
  const wrapper = mount(<CatalogHeader {...props} />)
  describe("initial render", () => {
    it("always renders one Typography component", () => {
      expect(wrapper.find(Typography)).toHaveLength(1)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("title")).toEqual(props.title)
    })
  })
})
