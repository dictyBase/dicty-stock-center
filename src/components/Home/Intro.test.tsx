import React from "react"
import { mount } from "enzyme"
import Intro from "./Intro"
import InlineEditor from "components/InlineEditor"
import PanelLoader from "./PanelLoader"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("Home/Intro", () => {
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
        <Intro />
      </MockProvider>,
    )
    it("renders loading component first", () => {
      expect(wrapper.find(PanelLoader)).toExist()
    })
  })
})
