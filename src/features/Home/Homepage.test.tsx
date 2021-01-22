import React from "react"
import { render, screen } from "@testing-library/react"
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
})
