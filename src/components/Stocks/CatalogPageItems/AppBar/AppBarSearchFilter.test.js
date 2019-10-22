import React from "react"
import { mount } from "enzyme"
import AppBarSearchFilter from "./AppBarSearchFilter"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/Strains/Catalog/AppBarSearchFilter", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarSearchFilter {...props} />
      </AppBarProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(FormControl)).toHaveLength(1)
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
