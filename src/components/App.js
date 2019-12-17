// @flow
import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
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
import { useStyles, navTheme } from "./appStyles"

type Props = {
  /** Object representing auth part of state */
  auth: Object,
  /** Object representing navbar part of state */
  navbar: Object,
  /** Object representing footer part of state */
  footer: Object,
  /** Action creator to fetch navbar and footer content */
  fetchNavbarAndFooter: Function,
}

const App = (props: Props) => {
  const { auth, navbar, footer, fetchNavbarAndFooter } = props
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

const mapStateToProps = ({ auth, navbar, footer }) => ({
  auth,
  navbar,
  footer,
})

export { App }
export default withRouter<*, *>(
  connect<*, *, *, *, *, *>(mapStateToProps, { fetchNavbarAndFooter })(App),
)
