import React from "react"
import { shallow } from "enzyme"
import AppBarRightMenu from "./AppBarRightMenu"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarRightMenu", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
      query: "test query",
      setQuery: jest.fn(),
      setQueryVariables: jest.fn(),
    }
    const wrapper = shallow(
      <AppBarProvider>
        <AppBarRightMenu {...props} />
      </AppBarProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
  })
})
