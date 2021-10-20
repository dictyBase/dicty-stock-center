import { render, screen, waitFor } from "@testing-library/react"
import RemoveFromCartButton from "./RemoveFromCartButton"
import userEvent from "@testing-library/user-event"

describe("Stocks/Catalog/common/RemoveFromCartButton", () => {
  const MockComponent = () => <RemoveFromCartButton handleClick={() => {}} />
  const buttonTitle = "Remove from cart"

  describe("initial render", () => {
    it("should render remove from cart button", () => {
      render(<MockComponent />)
      expect(screen.getByTitle(buttonTitle)).toBeInTheDocument()
    })

    it("should fire onClick", async () => {
      render(<MockComponent />)
      const button = screen.getByTitle(buttonTitle)
      await waitFor(() => userEvent.click(button))
    })

    it("should render on small window", () => {
      render(<MockComponent />)
      global.innerWidth = 300
      global.dispatchEvent(new Event("resize"))
      const button = screen.getByTitle(buttonTitle)
      expect(button).toBeInTheDocument()
      expect(button.firstElementChild).toBeInTheDocument()
    })
  })
})
