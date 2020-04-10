import React from "react"
import { mount } from "enzyme"
import wait from "waait"
import OauthSignHandler from "./OauthSignHandler"
import { LOGIN } from "common/graphql/mutations"
import { MockAuthProvider } from "common/utils/testing"
import clientConfig from "common/utils/clientConfig"

const mockHistoryPush = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe("authentication/OauthSignHandler", () => {
  // set up mocks for window event listeners
  const globalAny = global as any
  const map = {
    message: (any) => {},
  }
  globalAny.addEventListener = jest.fn((event, cb) => {
    map[event] = cb
  })
  globalAny.removeEventListener = jest.fn((event, cb) => {
    map[event] = cb
  })

  // variables used in both graphql mock and event data mock
  const redirectUrl = "http://localhost:3000/google/callback"
  const code = "1232t35"

  // graphql mocks, use variable to determine if mutation called
  let loginMutationCalled = false
  const mocks = [
    {
      request: {
        query: LOGIN,
        variables: {
          input: {
            client_id: clientConfig.google.clientId,
            redirect_url: redirectUrl,
            state: "state",
            code: code,
            scopes: "email",
            provider: "google",
          },
        },
      },
      result: () => {
        loginMutationCalled = true
        return {
          data: {
            login: {
              token: "fake token",
              user: {
                id: "123",
                email: "crazyjoe@davola.org",
                first_name: "Joe",
                last_name: "Davola",
                roles: [
                  {
                    role: "superuser",
                    permissions: [
                      {
                        permission: "admin",
                        resource: "dictybase",
                      },
                    ],
                  },
                ],
              },
              identity: {
                provider: "google",
              },
            },
          },
        }
      },
    },
  ]

  const wrapper = mount(
    <MockAuthProvider mocks={mocks}>
      <OauthSignHandler />
    </MockAuthProvider>,
  )

  beforeEach(() => {
    loginMutationCalled = false
  })

  describe("initial render", () => {
    it("renders null", () => {
      expect(wrapper.isEmptyRender()).toBeTruthy()
    })
  })

  describe("window behavior", () => {
    it("should add event listener on mount", () => {
      expect(globalAny.addEventListener).toHaveBeenCalled()
    })
    it("should remove event listener on unmount", () => {
      wrapper.unmount()
      expect(globalAny.removeEventListener).toHaveBeenCalled()
    })
  })

  describe("login mutation", () => {
    it("should return early if no provider included in event data", async () => {
      map.message({
        data: {
          query: `?code=${code}`,
          url: redirectUrl,
        },
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      })
      await wait(0)
      expect(loginMutationCalled).toBeFalsy()
    })
    it("should call login mutation and redirect to urls", async () => {
      map.message({
        data: {
          provider: "google",
          query: `?code=${code}`,
          url: redirectUrl,
        },
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      })
      await wait(0)
      expect(loginMutationCalled).toBeTruthy()
      await wait(0)
      expect(mockHistoryPush).toHaveBeenCalledWith("/load/auth")
      expect(mockHistoryPush).toHaveBeenCalledWith("/mydsc")
    })
  })
})
