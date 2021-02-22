import React from "react"
import { render, screen } from "@testing-library/react"
import CatalogWrapper from "./CatalogWrapper"
import { MockedProvider } from "@apollo/client/testing"
import { useHistory } from "react-router-dom"

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=regular",
    }),
    useHistory: jest.fn(),
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

  it("should redirect if no search filter", () => {
    ;(useHistory as jest.Mock).mockReturnValueOnce({
      push: mockHistoryPush,
    })
    jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("")

    render(
      <MockedProvider>
        <CatalogWrapper stockType="plasmid" />
      </MockedProvider>,
    )

    expect(mockHistoryPush).toHaveBeenLastCalledWith("plasmids?filter=regular")
  })
})
