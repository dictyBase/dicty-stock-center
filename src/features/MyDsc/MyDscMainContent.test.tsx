import { render, screen } from "@testing-library/react"
import MyDscMainContent from "./MyDscMainContent"

describe("MyDsc/MyDscMainContent", () => {
  it("should render loader", () => {
    const data = {
      id: "1",
      email: "jon-doe@example.com",
      first_name: "Jon",
      last_name: "Doe",
    }
    render(<MyDscMainContent data={data} provider="Google" />)
    expect(
      screen.getByText(`Name: ${data.first_name} ${data.last_name}`),
    ).toBeInTheDocument()
    expect(screen.getByText(`Email: ${data.email}`)).toBeInTheDocument()
    expect(screen.getByText(`Id: ${data.id}`)).toBeInTheDocument()
    expect(screen.getByText(`Provider: Google`)).toBeInTheDocument()
  })
})
