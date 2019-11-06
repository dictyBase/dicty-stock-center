import React from "react"
import { mount } from "enzyme"
import AppBarLeftMenu from "./AppBarLeftMenu"
import Paper from "@material-ui/core/Paper"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarLeftMenu", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarLeftMenu {...props} />
      </AppBarProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Paper)).toHaveLength(1)
      expect(wrapper.find(FormControl)).toHaveLength(1)
      expect(wrapper.find(Select)).toHaveLength(1)
    })
  })
})
