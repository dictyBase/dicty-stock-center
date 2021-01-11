import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import BackButton from "./BackButton"

describe("features/OrderForm/BackButton", () => {
  describe("clicking back button", () => {
    it("should update step number on click", () => {
      const prevStepSpy = jest.fn()
      render(<BackButton prevStep={prevStepSpy} />)
      const button = screen.getByRole("button")
      expect(button).toBeInTheDocument()
      userEvent.click(button)
      expect(prevStepSpy).toBeCalledTimes(1)
    })
  })
})
