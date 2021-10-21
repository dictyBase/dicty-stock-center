import { render, screen } from "@testing-library/react"
import ContactForm from "./ContactForm"

describe("Contact/ContactForm", () => {
  const MockComponent = () => <ContactForm />

  describe("initial render", () => {
    it("should render", () => {
      render(<MockComponent />)
      expect(screen.getByRole("form")).toBeInTheDocument()
    })
  })
})
