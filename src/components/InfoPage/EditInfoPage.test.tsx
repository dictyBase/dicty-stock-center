import React from "react"
import { shallow } from "enzyme"
import EditInfoPage from "./EditInfoPage"
import { Editor } from "draft-js"
import { BrowserRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("InfoPage/EditInfoPage", () => {
  describe("initial render", () => {
    const props = {
      classes: {},
      location: {
        state: {
          data: {
            content: JSON.stringify({
              entityMap: {},
              blocks: [
                {
                  key: "abc",
                  text: "123",
                  type: "unstyled",
                  depth: 0,
                },
              ],
            }),
          },
        },
      },
    }
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
    const wrapper = shallow(
      <MockProvider>
        <EditInfoPage {...props} />
      </MockProvider>,
    )
    it("renders initial components", () => {
      expect(wrapper.find(Editor)).toHaveLength(1)
    })
  })
})
