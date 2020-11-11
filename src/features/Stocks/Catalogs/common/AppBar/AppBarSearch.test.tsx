import React from "react"
import { render } from "@testing-library/react"
import AppBarSearch from "./AppBarSearch"
import { CatalogProvider } from "../CatalogContext"

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom")
  return {
    ...originalModule,
    useLocation: () => ({
      search: "?filter=gwdi",
    }),
  }
})

describe("Stocks/Strains/Catalog/AppBarSearch", () => {
  describe("initial render", () => {
    const props = {
      dropdownItems: [],
    }
    render(
      <CatalogProvider>
        <AppBarSearch {...props} />
      </CatalogProvider>,
    )
    it.todo("should render one search box")
  })

  describe("clicking buttons", () => {
    const props = {
      dropdownItems: [],
    }
    render(
      <CatalogProvider>
        <AppBarSearch {...props} />
      </CatalogProvider>,
    )
    it.todo("should use dispatch when clear button is clicked")

    it.todo("should use dispatch when search button is clicked")
  })

  describe("form submit", () => {
    const props = {
      dropdownItems: [],
    }
    render(
      <CatalogProvider>
        <AppBarSearch {...props} />
      </CatalogProvider>,
    )
    it.todo("should use dispatch when form is submitted")
  })
})
