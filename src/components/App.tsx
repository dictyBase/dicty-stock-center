import React, { useCallback, useRef } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import jwtDecode from "jwt-decode"
import { CartProvider } from "components/ShoppingCart/CartStore"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "utils/headerItems"
import CartIcon from "components/ShoppingCart/CartIcon"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { useAuthStore } from "components/authentication/AuthStore"
import useFetchRefreshToken from "hooks/useFetchRefreshToken"
import useFooter from "hooks/useFooter"
import useNavbar from "hooks/useNavbar"
import { GET_REFRESH_TOKEN } from "graphql/queries"
import { useStyles, navTheme } from "./appStyles"

const getTokenIntervalDelayInMS = (token: string) => {
  if (token === "") {
    return
  }
  const decodedToken = jwtDecode(token) as any
  const currentTime = new Date(Date.now())
  const jwtTime = new Date(decodedToken.exp * 1000)
  const timeDiffInMins = (+jwtTime - +currentTime) / 60000
  // all this to say we want the delay to be two minutes before the JWT expires
  return (timeDiffInMins - 2) * 60 * 1000
}

const App = () => {
  const [{ isAuthenticated, token }, dispatch] = useAuthStore()
  const { navbarData } = useNavbar()
  const { footerData } = useFooter()
  const classes = useStyles()
  const { refetch } = useQuery(GET_REFRESH_TOKEN, {
    variables: { token: token },
    errorPolicy: "ignore",
  })
  const interval = useRef(null)
  const delay = getTokenIntervalDelayInMS(token)

  const fetchRefreshToken = useCallback(async () => {
    const res = await refetch({ token: token })
    if (res.data.getRefreshToken) {
      dispatch({
        type: "UPDATE_TOKEN",
        payload: {
          provider: res.data.getRefreshToken.identity.provider,
          token: res.data.getRefreshToken.token,
          user: res.data.getRefreshToken.user,
        },
      })
    }
  }, [dispatch, refetch, token])
  useFetchRefreshToken(fetchRefreshToken, interval, delay!, isAuthenticated)

  const headerContent = isAuthenticated ? loggedHeaderItems : headerItems

  return (
    <div className={classes.body}>
      <Header items={headerContent}>{items => items.map(generateLinks)}</Header>
      <Navbar items={navbarData} theme={navTheme} />
      <br />
      <CartProvider>
        <main className={classes.main}>
          <CartIcon />
          <ErrorBoundary>
            <RenderRoutes />
          </ErrorBoundary>
        </main>
      </CartProvider>
      <Footer items={footerData} />
    </div>
  )
}

export default App
