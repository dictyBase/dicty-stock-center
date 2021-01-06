import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DialogTitleDisplay from "./DialogTitleDisplay"

describe("DialogTitleDisplay", () => {
  const handleCloseSpy = jest.fn()
  const props = {
    title: "Strain Details",
    handleClose: handleCloseSpy,
  }

  it("renders one button", () => {
    render(<DialogTitleDisplay {...props} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("renders correct title", () => {
    render(<DialogTitleDisplay {...props} />)
    expect(screen.getByRole("heading")).toHaveTextContent(props.title)
  })

  it("calls handleClose on button click", () => {
    render(<DialogTitleDisplay {...props} />)
    const button = screen.getByRole("button")
    userEvent.click(button)
    expect(handleCloseSpy).toHaveBeenCalledTimes(1)
  })
})
