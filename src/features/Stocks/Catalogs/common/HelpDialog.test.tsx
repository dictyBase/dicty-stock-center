import React from "react"
import { screen, render, waitFor } from "@testing-library/react"
import HelpDialog from "./HelpDialog"
import {
  CatalogContext,
  catalogReducer,
  strainInitialState,
} from "../context/CatalogContext"

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
        /The stock catalogs can be browsed by using the available dropdown menus/,
      ),
    ).toBeInTheDocument()
  })

  it("closes help dialog", async () => {
    render(
      <MockCatalogProvider>
        <HelpDialog />
      </MockCatalogProvider>,
    )

    const closeButton = screen.getByText("Close")
    expect(closeButton).toBeInTheDocument()

    await waitFor(() => {
      screen.getByText("Close").click()
    })
  })
})
