import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MockedProvider, MockedResponse } from "@apollo/react-testing"
import { AuthContext, authReducer } from "components/authentication/AuthStore"

type Props = {
  children: any
  mocks: ReadonlyArray<MockedResponse>
  user?: {
    id: number
    first_name: string
    last_name: string
    email: string
    roles: Array<{
      id: number
      role: string
      permissions?: Array<{
        id: number
        permission: string
        resource: string
      }>
    }>
  }
  /** Indicates if auth state should include valid token, default is true */
  validToken: boolean
}

const MockSuperuser = {
  id: 999,
  first_name: "Art",
  last_name: "Vandelay",
  email: "george@vandelayindustries.com",
  roles: [
    {
      id: 1,
      role: "superuser",
      permissions: [{ id: 1, permission: "test", resource: "testresource" }],
    },
  ],
}

const expiredToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrr-wp5AokiRbz3_oB4OxG-W9KcEEbDRcZc0nH3L7LzYptiy1PtAylQGxHTWZXtGz4ht0bAecBgmpdgXMguEIcoqPJ1n3pIWk_dUZegpqx0Lka21H6XxUTxiy8OcaarA8zdnPUnV6AmNP3ecFawIFYdvJB_cm-GvpCSbr8G8y_Mllj8f4x9nBH8pQux89_6gUY618iYv7tuPWBFfEbLxtF2pZS6YC1aSfLQxeNe8djT9YjpvRZA"

const activeToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjo1NTE2MjM5MDIyfQ.Twt1dSBv6Jha3dqWvyUWI4G_ySJsWTD3av30TDtsnyIBPgXwVM3KtPA_YaDw-iO9pfFWZXc2wFUQ6q5WjNwy14yf7IEf2-r_r78jn9tq8a-vSmlr3ieK-Wjg6Y_U8pa4ZXy2zdrtf7IxA2Jz25Vj-BKtW7z_D00qm6EqSGT46fs9Dh0e1zcuCfOwq-STMLFzIbdcpOzvgtyVfyo-P89qhBWooTBt11xR0HeEr5_gJMThXBLtgzT6t_FYzQj3GadPvUQg3gf3qsPOCYk5TNlTIzJXD6yNtncF1MGSpacKTXJFTi3zf_zzpFkBmftPPEicqJo0CrqGO66JdJby8RZE1w"

const MockAuthProvider = ({
  children,
  mocks,
  user = MockSuperuser,
  validToken = true,
}: Props) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    token: validToken ? activeToken : expiredToken,
    user: user,
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

export { MockSuperuser, MockAuthProvider }
