import React from "react"
import { mount } from "enzyme"
import App from "./App"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import CartIcon from "components/ShoppingCart/CartIcon"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { MockAuthProvider } from "utils/testing"

describe("layout/App", () => {
  const mocks = []
  const wrapper = mount(
    <MockAuthProvider mocks={mocks}>
      <App />
    </MockAuthProvider>,
  )
  describe("initial render without authentication", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Header)).toHaveLength(1)
      expect(wrapper.find(Footer)).toHaveLength(1)
      expect(wrapper.find(Navbar)).toHaveLength(1)
      expect(wrapper.find(CartIcon)).toHaveLength(1)
      expect(wrapper.find(ErrorBoundary)).toHaveLength(1)
      expect(wrapper.find(RenderRoutes)).toHaveLength(1)
    })
  })
})
