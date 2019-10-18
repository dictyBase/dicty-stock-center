import React from "react"
import { mount } from "enzyme"
import AppBarHelp from "./AppBarHelp"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarHelp", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
      query: "test query",
      setQuery: jest.fn(),
      setQueryVariables: jest.fn(),
    }
    const wrapper = mount(
      <AppBarProvider>
        <AppBarHelp {...props} />
      </AppBarProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
    it("always renders initial components", () => {
      expect(wrapper.find(IconButton)).toHaveLength(1)
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1)
    })
  })
})
