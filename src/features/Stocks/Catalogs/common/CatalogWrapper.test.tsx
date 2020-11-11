import React from "react"
import { render, screen } from "@testing-library/react"
import CatalogWrapper from "./CatalogWrapper"
import { MockedProvider } from "@apollo/client/testing"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=all",
    }),
  }
})

describe("Stocks/Catalogs/common/CatalogWrapper", () => {
  it("should render strain catalog page", () => {
    render(
      <MockedProvider>
        <CatalogWrapper stockType="strain" />
      </MockedProvider>,
    )
    expect(screen.getByText(/Strain Catalog/)).toBeInTheDocument()
  })

  it("should render plasmid catalog page", () => {
    render(
      <MockedProvider>
        <CatalogWrapper stockType="plasmid" />
      </MockedProvider>,
    )
    expect(screen.getByText(/Plasmid Catalog/)).toBeInTheDocument()
  })
})
