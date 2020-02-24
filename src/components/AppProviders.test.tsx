import React from "react"
import { mount } from "enzyme"
import AppProviders from "./AppProviders"
import { ApolloProvider } from "@apollo/react-hooks"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CartProvider } from "components/ShoppingCart/CartStore"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

describe("AppProviders", () => {
  const MockAuthProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(authReducer, {
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrr-wp5AokiRbz3_oB4OxG-W9KcEEbDRcZc0nH3L7LzYptiy1PtAylQGxHTWZXtGz4ht0bAecBgmpdgXMguEIcoqPJ1n3pIWk_dUZegpqx0Lka21H6XxUTxiy8OcaarA8zdnPUnV6AmNP3ecFawIFYdvJB_cm-GvpCSbr8G8y_Mllj8f4x9nBH8pQux89_6gUY618iYv7tuPWBFfEbLxtF2pZS6YC1aSfLQxeNe8djT9YjpvRZA",
      user: {},
      provider: "google",
      isAuthenticated: true,
    })
    return (
      <AuthContext.Provider value={[state, dispatch]}>
        {children}
      </AuthContext.Provider>
    )
  }
  const wrapper = mount(
    <MockAuthProvider>
      <AppProviders>test</AppProviders>
    </MockAuthProvider>,
  )
  describe("initial render", () => {
    it("renders empty div first", () => {
      expect(wrapper.find("div")).toHaveLength(1)
    })
    it("renders providers after client initialized", () => {
      wrapper.update()
      expect(wrapper.find(ApolloProvider)).toHaveLength(1)
      expect(wrapper.find(MuiThemeProvider)).toHaveLength(1)
      expect(wrapper.find(CartProvider)).toHaveLength(1)
      expect(wrapper.find(BrowserRouter)).toHaveLength(1)
    })
  })
})
