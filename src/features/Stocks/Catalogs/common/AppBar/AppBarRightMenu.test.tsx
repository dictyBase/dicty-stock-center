import React from "react"
import { shallow } from "enzyme"
import AppBarRightMenu from "./AppBarRightMenu"
import { AppBarProvider } from "./AppBarContext"

describe("Stocks/CatalogPageItems/AppBar/AppBarRightMenu", () => {
  describe("initial render", () => {
    const wrapper = shallow(
      <AppBarProvider>
        <AppBarRightMenu />
      </AppBarProvider>,
    )
    it("renders without crashing", () => {
      expect(wrapper).toHaveLength(1)
    })
  })
})
