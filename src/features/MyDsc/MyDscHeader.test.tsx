import { render, screen } from "@testing-library/react"
import MyDscHeader from "./MyDscHeader"

describe("MyDsc/MyDscHeader", () => {
  it("should render loader", () => {
    render(<MyDscHeader />)
    expect(screen.getByText("My DSC")).toBeInTheDocument()
  })
})
