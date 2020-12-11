import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Formik } from "formik"
import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import { AuthContext, authReducer } from "features/Authentication/AuthStore"
import { CartContext, cartReducer } from "features/ShoppingCart/CartStore"
import { User } from "common/types"

type AuthProps = {
  children: React.ReactNode
  mocks: ReadonlyArray<MockedResponse>
  user?: User
  /** Indicates if auth state should include valid token, default is true */
  validToken?: boolean
}

type CartItem = {
  id: string
  name: string
  summary: string
  type?: string
  fee: string
}

type CartProps = {
  children: React.ReactNode
  mocks: ReadonlyArray<MockedResponse>
  addedItems: Array<CartItem>
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
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNDE2MjM5MDIyfQ.lAF-llZT8AfnYVNyF2Qew_Gv-omVDeJJVcgw6MYKgSUglcAa-sPqdfOYDoOmED82RXawv8VEX6pae-IKdTPKlLlSID-OP-2JKw8pK2gDmTTpSX95oPsVv_rSRhJUlT0miIM-gadcMBNaJjHAsVobzMJIbX6Har_XBrISWwRxaf2XNwDz2IJKg3r1h9jN1PyGICBh06UWwVt15306l5x-40adQ3pekkRRWUvyscdLp4_eCqs62r9yGKMJkqx8anlX9dNW2TToHgNEaV3qIivIgABvV9Z66dQ1OLfxlvd9V-d8BWp6pFn9eSNJN5qo66nd3Fqy4a5M8o5E269huCxahQ"

const activeToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjo1NTE2MjM5MDIyfQ.Twt1dSBv6Jha3dqWvyUWI4G_ySJsWTD3av30TDtsnyIBPgXwVM3KtPA_YaDw-iO9pfFWZXc2wFUQ6q5WjNwy14yf7IEf2-r_r78jn9tq8a-vSmlr3ieK-Wjg6Y_U8pa4ZXy2zdrtf7IxA2Jz25Vj-BKtW7z_D00qm6EqSGT46fs9Dh0e1zcuCfOwq-STMLFzIbdcpOzvgtyVfyo-P89qhBWooTBt11xR0HeEr5_gJMThXBLtgzT6t_FYzQj3GadPvUQg3gf3qsPOCYk5TNlTIzJXD6yNtncF1MGSpacKTXJFTi3zf_zzpFkBmftPPEicqJo0CrqGO66JdJby8RZE1w"

const MockAuthProvider = ({
  children,
  mocks,
  user = MockSuperuser,
  validToken = true,
}: AuthProps) => {
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

const MockCartProvider = ({ children, mocks, addedItems }: CartProps) => {
  const [state, dispatch] = React.useReducer(cartReducer, {
    addedItems: addedItems,
    showCartDialog: false,
    maxItemsInCart: false,
  })
  return (
    <CartContext.Provider value={[state, dispatch]}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>{children}</BrowserRouter>
      </MockedProvider>
    </CartContext.Provider>
  )
}

const OrderFormWrapper = ({ children }: { children: React.ReactNode }) => (
  <Formik
    initialValues={{
      firstName: "john",
      lastName: "doe",
      email: "johndoe@test.com",
      organization: "northwestern",
      lab: "dictybase",
      address1: "123 fake st",
      city: "chicago",
      zip: "60601",
      country: "usa",
      phone: "1234567890",
      paymentAccountNumber: "999",
    }}
    onSubmit={jest.fn()}>
    {children}
  </Formik>
)

export { MockSuperuser, MockAuthProvider, MockCartProvider, OrderFormWrapper }
