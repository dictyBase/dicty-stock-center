import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import PhenotypeListHeader from "./PhenotypeListHeader"

describe("Stocks/SearchResults/PhenotypeListHeader", () => {
  describe("initial render", () => {
    const theme = createMuiTheme({
      props: { MuiWithWidth: { initialWidth: "lg" } },
    })
    // need to add theme to render with large screen
    // this allows all three headers to show
    render(
      <ThemeProvider theme={theme}>
        <PhenotypeListHeader />
      </ThemeProvider>,
    )
    it("renders the three expected list headers", () => {
      expect(screen.getByText("Strain Descriptor")).toBeTruthy()
      expect(screen.getByText("Associated Gene(s)")).toBeTruthy()
      expect(screen.getByText("Reference")).toBeTruthy()
    })
  })
})
