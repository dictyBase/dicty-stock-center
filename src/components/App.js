// @flow
import React, { useCallback, useEffect, useRef } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { useLazyQuery, useQuery } from "@apollo/react-hooks"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import jwtDecode from "jwt-decode"
import fetchNavbarAndFooter from "actions/navbar"
import footerItems from "constants/Footer"
import navItems from "constants/Navbar"
import { CartProvider } from "components/ShoppingCart/CartStore"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "utils/headerItems"
import "utils/icons" // fontawesome library
import CartIcon from "components/ShoppingCart/CartIcon"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { useAuthStore } from "components/authentication/AuthStore"
import useFetchRefreshToken from "hooks/useFetchRefreshToken"
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

type Props = {
  /** Object representing navbar part of state */
  navbar: Object,
  /** Object representing footer part of state */
  footer: Object,
  /** Action creator to fetch navbar and footer content */
  fetchNavbarAndFooter: Function,
}

const App = (props: Props) => {
  const { navbar, footer, fetchNavbarAndFooter } = props

  const [{ token, isAuthenticated }, dispatch] = useAuthStore()
  const classes = useStyles()
  // const [getRefreshToken, { data, error }] = useLazyQuery(GET_REFRESH_TOKEN, {
  //   onCompleted: data =>
  //     dispatch({
  //       type: "UPDATE_TOKEN",
  //       payload: {
  //         token: data.getRefreshToken.token,
  //       },
  //     }),
  // })
  const { refetch } = useQuery(GET_REFRESH_TOKEN, {
    variables: { token: token },
    skip: true,
  })

  const interval = useRef(null)
  const delay = getTokenIntervalDelay(token)

  const headerContent = isAuthenticated ? loggedHeaderItems : headerItems
  // if any errors, fall back to old link setup
  const navbarContent = !navbar.links ? navItems : navbar.links
  const footerContent = !footer.links ? footerItems : footer.links

  useEffect(() => {
    fetchNavbarAndFooter()
  }, [fetchNavbarAndFooter])

  const fetchRefreshToken = useCallback(async () => {
    const res = await refetch({ token: token })
    //     dispatch({
    //       type: "UPDATE_TOKEN",
    //       payload: {
    //         token: data.getRefreshToken.token,
    //       },
    //     }),
    console.log(res)
  }, [refetch, token])

  useFetchRefreshToken(fetchRefreshToken, interval, delay, isAuthenticated)

  return (
    <div className={classes.body}>
      <Header items={headerContent}>{items => items.map(generateLinks)}</Header>
      <Navbar items={navbarContent} theme={navTheme} />
      <br />
      <CartProvider>
        <main className={classes.main}>
          <CartIcon />
          <ErrorBoundary>
            <RenderRoutes {...props} />
          </ErrorBoundary>
        </main>
      </CartProvider>
      <Footer items={footerContent} />
    </div>
  )
}

const mapStateToProps = ({ navbar, footer }) => ({
  navbar,
  footer,
})

export { App }
export default withRouter<*, *>(
  connect<*, *, *, *, *, *>(mapStateToProps, { fetchNavbarAndFooter })(App),
)
