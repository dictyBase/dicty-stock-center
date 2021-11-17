import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PaymentPage from "./PaymentPage"
import { OrderFormWrapper } from "common/utils/testing"
import mockValues from "../utils/mockValues"

describe("OrderForm/Payment/PaymentPage", () => {
  const mockSetFormData = jest.fn()
  const mockNextStep = jest.fn()
  const mockPrevStep = jest.fn()
  const props = {
    formData: mockValues,
    setFormData: mockSetFormData,
    nextStep: mockNextStep,
    prevStep: mockPrevStep,
  }

  describe("initial render", () => {
    it("renders expected controls", () => {
      render(
        <BrowserRouter>
          <OrderFormWrapper>
            <PaymentPage {...props} />
          </OrderFormWrapper>
        </BrowserRouter>,
      )
      const checkbox = screen.getByRole("checkbox")
      const radios = screen.getAllByRole("radio")
      expect(checkbox).toBeInTheDocument()
      expect(radios).toHaveLength(4)
    })
  })

  describe("button clicking", () => {
    it("calls prev step function when clicking back button", () => {
      render(
        <BrowserRouter>
          <OrderFormWrapper>
            <PaymentPage {...props} />
          </OrderFormWrapper>
        </BrowserRouter>,
      )
      const backButton = screen.getByRole("button", { name: "Back" })

      expect(backButton).toBeInTheDocument()
      userEvent.click(backButton)
      expect(mockPrevStep).toHaveBeenCalled()
    })
  })

  it("should use mock values when checkbox is clicked and submitted", async () => {
    render(
      <BrowserRouter>
        <OrderFormWrapper>
          <PaymentPage {...props} />
        </OrderFormWrapper>
      </BrowserRouter>,
    )

    const checkbox = screen.getByDisplayValue("sameAsShipping")
    expect(checkbox).toBeInTheDocument()
    await waitFor(() => userEvent.click(checkbox))

    const firstNameInput = screen.getByLabelText("payerFirstName")
    expect(firstNameInput).toHaveValue(mockValues.firstName)

    const continueButton = screen.getByText("Continue")
    expect(continueButton).toBeInTheDocument()
    await waitFor(() => userEvent.click(continueButton))
  })
})
