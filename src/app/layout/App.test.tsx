import React from "react"
import { mount } from "enzyme"
import App, { getTokenIntervalDelayInMS } from "./App"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import CartIcon from "features/ShoppingCart/CartIcon"
import ErrorBoundary from "features/Errors/ErrorBoundary"
import RenderRoutes from "app/routes/RenderRoutes"
import * as auth from "features/Authentication/AuthStore"
import { MockAuthProvider } from "common/utils/testing"
import { GET_REFRESH_TOKEN } from "common/graphql/queries/auth"
import waitForExpect from "wait-for-expect"

describe("App component", () => {
  const mockState = {
    token: "",
    isAuthenticated: false,
  }
  const mockDispatch = jest.fn()
  jest
    .spyOn(auth, "useAuthStore")
    .mockImplementation(() => [mockState, mockDispatch])
  const mocks = [
    {
      request: {
        query: GET_REFRESH_TOKEN,
        variables: {
          token: "",
        },
      },
      result: {
        data: {
          getRefreshToken: {
            token:
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjo1NTE2MjM5MDIyfQ.Twt1dSBv6Jha3dqWvyUWI4G_ySJsWTD3av30TDtsnyIBPgXwVM3KtPA_YaDw-iO9pfFWZXc2wFUQ6q5WjNwy14yf7IEf2-r_r78jn9tq8a-vSmlr3ieK-Wjg6Y_U8pa4ZXy2zdrtf7IxA2Jz25Vj-BKtW7z_D00qm6EqSGT46fs9Dh0e1zcuCfOwq-STMLFzIbdcpOzvgtyVfyo-P89qhBWooTBt11xR0HeEr5_gJMThXBLtgzT6t_FYzQj3GadPvUQg3gf3qsPOCYk5TNlTIzJXD6yNtncF1MGSpacKTXJFTi3zf_zzpFkBmftPPEicqJo0CrqGO66JdJby8RZE1w",
            user: {
              id: 999,
              first_name: "Art",
              last_name: "Vandelay",
              email: "george@vandelayindustries.com",
              roles: [
                {
                  role: "Latex Salesman",
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
      },
    },
  ]
  const wrapper = mount(
    <MockAuthProvider mocks={mocks}>
      <App />
    </MockAuthProvider>,
  )
  describe("initial render when logged in", () => {
    it("always renders initial components", () => {
      expect(wrapper.find(Header)).toHaveLength(1)
      expect(wrapper.find(Footer)).toHaveLength(1)
      expect(wrapper.find(Navbar)).toHaveLength(1)
      expect(wrapper.find(CartIcon)).toHaveLength(1)
      expect(wrapper.find(ErrorBoundary)).toHaveLength(1)
      expect(wrapper.find(RenderRoutes)).toHaveLength(1)
    })
    it("should call dispatch after receiving data", async () => {
      await waitForExpect(() => {
        expect(mockDispatch).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("getTokenIntervalDelayInMS function", () => {
  it("should return undefined if token is empty string", () => {
    expect(getTokenIntervalDelayInMS("")).toBeUndefined()
  })
})
