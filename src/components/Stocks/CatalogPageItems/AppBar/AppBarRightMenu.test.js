import React from "react"
import { mount } from "enzyme"
import AppBarRightMenu from "./AppBarRightMenu"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarRightMenu", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
      query: "test query",
      setQuery: jest.fn(),
      setQueryVariables: jest.fn(),
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarRightMenu {...props} />
      </AppBarProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(2)
      expect(wrapper.find(Menu)).toHaveLength(1)
    })
  })
})
