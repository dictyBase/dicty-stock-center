import React from "react"
import { mount } from "enzyme"
import App, { getTokenIntervalDelayInMS } from "./App"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import CartIcon from "features/ShoppingCart/CartIcon"
import ErrorBoundary from "features/Errors/ErrorBoundary"
import RenderRoutes from "app/routes/RenderRoutes"
import { MockAuthProvider } from "common/utils/testing"

describe("App component", () => {
  const wrapper = mount(
    <MockAuthProvider mocks={[]}>
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

describe("getTokenIntervalDelayInMS function", () => {
  it("should return undefined if token is empty string", () => {
    expect(getTokenIntervalDelayInMS("")).toBeUndefined()
  })
})
