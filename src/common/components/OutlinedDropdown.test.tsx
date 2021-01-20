import React from "react"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import OutlinedDropdown from "./OutlinedDropdown"

describe("common/components/OutlinedDropdown", () => {
  const handleChangeSpy = jest.fn()
  const values = [1, 2, 3, 4, 5, 6]
  describe("dropdown clicking", () => {
    it("calls function on change", () => {
      render(
        <OutlinedDropdown
          handleChange={handleChangeSpy}
          label="Qty"
          dropdownValues={values}
          inputValue={4}
        />,
      )
      const dropdown = screen.getByRole("button", { name: "Qty 4" })
      expect(dropdown).toBeInTheDocument()
      userEvent.click(dropdown)
      const listbox = within(screen.getByRole("listbox"))
      userEvent.click(listbox.getByText("2"))
      expect(handleChangeSpy).toHaveBeenCalledTimes(1)
    })
  })
})
