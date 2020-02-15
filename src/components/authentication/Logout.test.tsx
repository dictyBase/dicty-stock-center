import React from "react"
import { mount } from "enzyme"
import Logout from "./Logout"
import { Redirect, BrowserRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("authentication/Logout", () => {
  describe("initial render", () => {
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
        <Logout />
      </MockProvider>,
    )
    it("always renders initial components", () => {
      expect(wrapper.find(Redirect)).toHaveLength(1)
    })
  })
})
