import React, { useCallback, useRef } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import jwtDecode from "jwt-decode"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "common/utils/headerItems"
import CartIcon from "features/ShoppingCart/CartIcon"
import ErrorBoundary from "features/Errors/ErrorBoundary"
import RenderRoutes from "app/routes/RenderRoutes"
import { useAuthStore } from "features/Authentication/AuthStore"
import { useFetchRefreshToken, useFooter, useNavbar } from "dicty-hooks"
import { GET_REFRESH_TOKEN } from "common/graphql/queries"
import { useStyles, navTheme } from "./appStyles"

interface IHeader {
  isRouter?: boolean
  text: string
  icon: IconProp
  url: string
}

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
      const { data } = res
      dispatch({
        type: "UPDATE_TOKEN",
        payload: {
          provider: data.getRefreshToken.identity.provider,
          token: data.getRefreshToken.token,
          user: data.getRefreshToken.user,
        },
      })
    }
  }, [dispatch, refetch, token])
  useFetchRefreshToken(fetchRefreshToken, interval, delay!, isAuthenticated)

  const headerContent = isAuthenticated ? loggedHeaderItems : headerItems

  return (
    <div className={classes.body}>
      <Header items={headerContent}>
        {(items: Array<IHeader>) => items.map(generateLinks)}
      </Header>
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

export { getTokenIntervalDelayInMS }
export default App
