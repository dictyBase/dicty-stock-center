import { render, screen } from "@testing-library/react"
import AuthLoader from "./AuthLoader"

describe("Authentication/AuthLoader", () => {
  it("should render loader", () => {
    render(<AuthLoader />)
    expect(screen.getByText("Logging in...")).toBeInTheDocument()
  })
})
