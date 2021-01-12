import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import AddToCartDialogActions from "./AddToCartDialogActions"

describe("features/Stocks/Catalogs/common/AddToCartDialogActions", () => {
  describe("button clicking", () => {
    const handleCloseSpy = jest.fn()

    it("calls correct functions when handleCloseSpy is passed as prop", () => {
      const props = {
        handleClose: handleCloseSpy,
      }
      render(
        <BrowserRouter>
          <AddToCartDialogActions {...props} />
        </BrowserRouter>,
      )
      const button = screen.getByRole("button", { name: "Continue Shopping" })
      userEvent.click(button)
      expect(handleCloseSpy).toHaveBeenCalledTimes(1)
    })
  })
})
