import React, { useCallback, useRef, useState } from "react"
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
import { GET_REFRESH_TOKEN } from "queries/queries"
import { useStyles, navTheme } from "./appStyles"

const getTokenIntervalDelay = token => {
  if (token === "") {
    return
  }
  const decodedToken = jwtDecode(token)
  const currentTime = new Date(Date.now())
  const jwtTime = new Date(decodedToken.exp * 1000)
  const timeDiffInMins = (jwtTime - currentTime) / 60000
  // all this to say we want the delay to be two minutes before the JWT expires
  return (timeDiffInMins - 2) * 60 * 1000
}

const App = () => {
  const [skipQuery, setSkipQuery] = useState(true)
  const [{ isAuthenticated, token }, dispatch] = useAuthStore()
  const { navbarData } = useNavbar()
  const { footerData } = useFooter()
  const classes = useStyles()
  const { refetch } = useQuery(GET_REFRESH_TOKEN, {
    variables: { token: token },
    skip: skipQuery,
  })

  const interval = useRef(null)
  const delay = getTokenIntervalDelay(token)

  const headerContent = isAuthenticated ? loggedHeaderItems : headerItems
  const fetchRefreshToken = useCallback(async () => {
    setSkipQuery(false)
    const res = await refetch({ variables: { token: token } })
    if (res.data) {
      dispatch({
        type: "UPDATE_TOKEN",
        payload: {
          token: res.data.getRefreshToken.token,
        },
      })
    }
    return () => setSkipQuery(true)
  }, [dispatch, refetch, token])

  useFetchRefreshToken(fetchRefreshToken, interval, delay, isAuthenticated)

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
