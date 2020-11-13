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
      expect(wrapper.find(Typography)).toHaveLength(2)
    })
    it("matches title prop value", () => {
      expect(wrapper.prop("title")).toEqual(props.title)
    })
    it("has expected text for ordering", () => {
      expect(wrapper.text()).toContain(
        "PLEASE DO NOT ORDER FROM THIS TEST SITE. THIS IS FOR INTERNAL TESTING ONLY. THANKS!",
      )
    })
  })
})
