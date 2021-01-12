import React from "react"
import { render, screen } from "@testing-library/react"
import AddressFields, { checkIfCountry } from "./AddressFields"
import { OrderFormWrapper } from "common/utils/testing"

describe("features/OrderForm/AddressFields", () => {
  describe("initial render with country", () => {
    const props = {
      fields: [
        {
          name: "firstName",
          field: "First Name",
          required: true,
        },
        {
          name: "lastName",
          field: "Last Name",
          required: true,
        },
        {
          name: "country",
          field: "Country",
          required: true,
        },
      ],
      countryName: "country",
    }
    it("displays all expected text fields", () => {
      render(
        <OrderFormWrapper>
          <AddressFields {...props} />
        </OrderFormWrapper>,
      )
      props.fields.forEach((item) => {
        expect(screen.getByText(`${item.field}:`)).toBeInTheDocument()
      })
      expect(screen.getAllByRole("textbox")).toHaveLength(3)
    })
  })

  describe("initial render without country", () => {
    const props = {
      fields: [
        {
          name: "firstName",
          field: "First Name",
          required: true,
        },
        {
          name: "lastName",
          field: "Last Name",
          required: true,
        },
      ],
      countryName: "country",
    }
    it("displays all expected text fields", () => {
      render(
        <OrderFormWrapper>
          <AddressFields {...props} />
        </OrderFormWrapper>,
      )
      props.fields.forEach((item) => {
        expect(screen.getByText(`${item.field}:`)).toBeInTheDocument()
      })
      expect(screen.getAllByRole("textbox")).toHaveLength(2)
    })
  })
})

describe("checkIfCountry function", () => {
  it("should return true for expected country fields", () => {
    expect(checkIfCountry("country")).toBeTruthy()
    expect(checkIfCountry("payerCountry")).toBeTruthy()
  })
  it("should return false for wrong field", () => {
    expect(checkIfCountry("firstName")).toBeFalsy()
  })
})
