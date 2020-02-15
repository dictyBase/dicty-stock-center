import React from "react"
import { mount } from "enzyme"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import CartIcon from "components/ShoppingCart/CartIcon"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("layout/App", () => {
  const mocks = []
  const MockProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(authReducer, {
      token: "xyz",
      user: {
        first_name: "Art",
        last_name: "Vandelay",
        email: "george@vandelayindustries.com",
      },
      provider: "google",
      isAuthenticated: true,
    })
    return (
      <AuthContext.Provider value={[state, dispatch]}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter>{children}</BrowserRouter>
        </MockedProvider>
      </AuthContext.Provider>
    )
  }
  const wrapper = mount(
    <MockProvider>
      <App />
    </MockProvider>,
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
