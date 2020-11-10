import React from "react"
import { screen, render } from "@testing-library/react"
import HelpDialog from "./HelpDialog"
import {
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "./CatalogContext"

describe("Stocks/Catalogs/common/HelpDialog", () => {
  const initialState = {
    ...strainInitialState,
    helpDialogOpen: true,
  }
  const MockCatalogProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(catalogReducer, initialState)
    return (
      <CatalogContext.Provider value={{ state, dispatch }}>
        {children}
      </CatalogContext.Provider>
    )
  }

  it("renders help dialog content when dialog box is open", () => {
    render(
      <MockCatalogProvider>
        <HelpDialog />
      </MockCatalogProvider>,
    )
    expect(
      screen.getByText(
        /The catalog page data is provided as as infinite scroll./,
      ),
    ).toBeInTheDocument()
  })
})
