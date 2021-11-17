import React from "react"
import { render, screen } from "@testing-library/react"
import useGoogleAnalytics from "./useGoogleAnalytics"
import { BrowserRouter } from "react-router-dom"

jest.mock("react-ga", () => {
  const ga = jest.requireActual("react-ga")
  return { ...ga, initialize: jest.fn(), set: jest.fn(), pageview: jest.fn() }
})

jest.mock("react-router-dom", () => {
  const router = jest.requireActual("react-router-dom")
  const useLocation = jest.fn().mockReturnValue({
    pathname: "",
    search: "",
  })
  return { ...router, useLocation }
})

const MockComponent = () => {
  useGoogleAnalytics()
  return (
    <BrowserRouter>
      <h1>Google analytics</h1>
    </BrowserRouter>
  )
}

describe("common/hooks/useGoogleAnalytics", () => {
  it("should use google analytics", () => {
    process.env = Object.assign(process.env, {
      NODE_ENV: "production",
      REACT_APP_GA_TRACKING_ID: "tracking_id",
      REACT_APP_BASENAME: "stockcenter",
    })

    render(<MockComponent />)
    expect(screen.getByText("Google analytics")).toBeInTheDocument()
  })
})
