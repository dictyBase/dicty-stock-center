import React from "react"
import { mount } from "enzyme"
import AppBarHelp from "./AppBarHelp"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarHelp", () => {
  describe("initial render", () => {
    const wrapper = mount(
      <AppBarProvider>
        <AppBarHelp />
      </AppBarProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
