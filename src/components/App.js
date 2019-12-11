// @flow
import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"

import fetchNavbarAndFooter from "actions/navbar"
import footerItems from "constants/Footer"
import navItems from "constants/Navbar"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "utils/headerItems"
import Cart from "./Cart"
import ErrorBoundary from "components/Errors/ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { useStyles, navTheme } from "./appStyles"
// eslint-disable-next-line
import library from "utils/icons"

type Props = {
  /** Object representing auth part of state */
  auth: Object,
  /** Object representing cart part of state */
  cart: Object,
  /** Object representing navbar part of state */
  navbar: Object,
  /** Object representing footer part of state */
  footer: Object,
  /** Action creator to fetch navbar and footer content */
  fetchNavbarAndFooter: Function,
}

const App = (props: Props) => {
  const { auth, cart, navbar, footer, fetchNavbarAndFooter } = props
  const classes = useStyles()
  const headerContent = auth.isAuthenticated ? loggedHeaderItems : headerItems
  // if any errors, fall back to old link setup
  const navbarContent = !navbar.links ? navItems : navbar.links
  const footerContent = !footer.links ? footerItems : footer.links

  useEffect(() => {
    fetchNavbarAndFooter()
  }, [fetchNavbarAndFooter])

  return (
    <div className={classes.body}>
      <Header items={headerContent}>{items => items.map(generateLinks)}</Header>
      <Navbar items={navbarContent} theme={navTheme} />
      <br />
      <main className={classes.main}>
        <Cart cart={cart} />
        <ErrorBoundary>
          <RenderRoutes {...props} />
        </ErrorBoundary>
      </main>
      <Footer items={footerContent} />
    </div>
  )
}

const mapStateToProps = ({ auth, cart, navbar, footer }) => ({
  auth,
  cart,
  navbar,
  footer,
})

export { App }
export default withRouter<*, *>(
  connect<*, *, *, *, *, *>(mapStateToProps, { fetchNavbarAndFooter })(App),
)
