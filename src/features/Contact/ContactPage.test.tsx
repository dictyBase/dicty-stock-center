import { render, screen } from "@testing-library/react"
import ContactPage from "./ContactPage"

describe("Contact/ContactPage", () => {
  const MockComponent = () => <ContactPage />

  describe("initial render", () => {
    it("should render", () => {
      render(<MockComponent />)
      expect(screen.getByText("Contact Us")).toBeInTheDocument()
    })
  })
})
