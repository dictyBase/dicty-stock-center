import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PaymentMethod from "./PaymentMethod"
import { OrderFormWrapper } from "common/utils/testing"

describe("OrderForm/Payment/PaymentMethod", () => {
  describe("initial render", () => {
    it("renders four radio buttons", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      const radios = screen.getAllByRole("radio")
      expect(radios).toHaveLength(4)
    })

    it("renders one text field", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      expect(screen.getByRole("textbox")).toBeInTheDocument()
    })
  })

  describe("radio button interactions", () => {
    it("removes textbox when clicking waiver", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      const waiver = screen.getByRole("radio", {
        name: "Waiver Requested",
      })
      userEvent.click(waiver)
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("removes textbox when clicking credit", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      const credit = screen.getByRole("radio", {
        name: "Credit Card",
      })
      userEvent.click(credit)
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("removes textbox when clicking wire", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      const wire = screen.getByRole("radio", {
        name: "Wire Transfer",
      })
      userEvent.click(wire)
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("correctly toggles textbox", () => {
      render(
        <OrderFormWrapper>
          <PaymentMethod />
        </OrderFormWrapper>,
      )
      const wire = screen.getByRole("radio", {
        name: "Wire Transfer",
      })
      const po = screen.getByRole("radio", {
        name: "Purchase Order (PO)",
      })
      expect(screen.queryByRole("textbox")).toBeInTheDocument()
      userEvent.click(wire)
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
      userEvent.click(po)
      expect(screen.queryByRole("textbox")).toBeInTheDocument()
    })
  })
})
