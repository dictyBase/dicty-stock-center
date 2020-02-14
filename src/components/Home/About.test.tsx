import React from "react"
import { mount } from "enzyme"
import About from "./About"
import InlineEditor from "components/InlineEditor"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("Home/About", () => {
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
            {children}
          </MockedProvider>
        </AuthContext.Provider>
      )
    }
    const wrapper = mount(
      <MockProvider>
        <About />
      </MockProvider>,
    )
    it("renders loading components first", () => {
      expect(wrapper.find(Grid)).toExist()
      expect(wrapper.find(Skeleton)).toExist()
      expect(wrapper.find(SkeletonTheme)).toExist()
    })
  })
})
