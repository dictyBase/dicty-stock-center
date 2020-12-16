import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"

const globalAny = global as any

describe("features/Stocks/Details/common/DetailsHeaderCopyIcon", () => {
  const props = {
    id: "DBS0351367",
  }
  describe("initial render", () => {
    it("renders copy icon", () => {
      render(<DetailsHeaderCopyIcon {...props} />)
      const button = screen.getByRole("button", { name: "copy icon" })
      expect(button).toBeInTheDocument()
    })
  })

  describe("button clicking", () => {
    globalAny.navigator.clipboard = {
      writeText: jest.fn(() => Promise.resolve()),
    }
    globalAny.window.setTimeout = jest.fn()
    it("should write to clipboard on click", () => {
      render(<DetailsHeaderCopyIcon {...props} />)
      const button = screen.getByRole("button", { name: "copy icon" })
      userEvent.click(button)
      expect(globalAny.navigator.clipboard.writeText).toHaveBeenCalled()
      expect(globalAny.window.setTimeout).toHaveBeenCalled()
    })
  })
})
