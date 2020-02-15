import React from "react"
import { mount } from "enzyme"
import InfoPage from "./InfoPage"
import Loader from "components/common/Loader"
import { BrowserRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("InfoPage/InfoPage", () => {
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
        <InfoPage />
      </MockProvider>,
    )
    it("renders loader first", () => {
      expect(wrapper.find(Loader)).toHaveLength(1)
    })
  })
})
