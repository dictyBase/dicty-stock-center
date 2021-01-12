import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import Homepage from "./Homepage"
import { MockAuthProvider } from "common/utils/testing"

describe("features/Home/Homepage", () => {
  describe("initial render", () => {
    it("should display user greeting when logged in", () => {
      render(
        <MockAuthProvider mocks={[]}>
          <Homepage />
        </MockAuthProvider>,
      )
      expect(screen.getByText(/Hello, Art Vandelay!/)).toBeInTheDocument()
    })
  })
  describe("browser warning", () => {
    Object.defineProperty(window.navigator, "userAgent", {
      value: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)",
      configurable: true,
    })
    it("should display BrowserWarning for IE 10", async () => {
      render(
        <MockAuthProvider mocks={[]}>
          <Homepage />
        </MockAuthProvider>,
      )
      await waitFor(() => {
        expect(
          screen.getByText(
            /Dicty Stock Center may not work as expected on your browser./,
          ),
        ).toBeInTheDocument()
      })
    })
  })
})
