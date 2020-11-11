import React from "react"
import { createMount } from "@material-ui/core/test-utils"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CatalogAppBar from "./CatalogAppBar"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import AppBarLeftMenu from "features/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "features/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "features/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

describe("Stocks/Catalogs/common/CatalogAppBar", () => {
  describe("initial render on large device", () => {
    // need to create custom theme to view components nested below Hidden components
    // https://github.com/airbnb/enzyme/issues/2179#issuecomment-529320192
    const theme = createMuiTheme({
      props: { MuiWithWidth: { initialWidth: "lg" } },
    })
    const props = {
      leftDropdownItems: [],
      rightDropdownItems: [],
      stockType: "strain",
    }
    const wrapper = createMount()(
      <ThemeProvider theme={theme}>
        <CatalogProvider>
          <CatalogAppBar {...props} />
        </CatalogProvider>
      </ThemeProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(AppBar)).toHaveLength(1)
      expect(wrapper.find(Toolbar)).toHaveLength(1)
      expect(wrapper.find(AppBarLeftMenu)).toHaveLength(1)
      expect(wrapper.find(AppBarSearch)).toHaveLength(1)
      expect(wrapper.find(AppBarRightMenu)).toHaveLength(1)
    })
  })
})
