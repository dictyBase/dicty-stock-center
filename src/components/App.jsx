// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"

import fetchNavbar from "actions/navbar"
import fetchFooter from "actions/footer"
import footerItems from "constants/Footer"
import navItems from "constants/Navbar"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "utils/headerItems"
import Cart from "./Cart"
import ErrorBoundary from "./ErrorBoundary"
import RenderRoutes from "routes/RenderRoutes"
import { MainBodyContainer } from "styles"

const navTheme = {
  primary: "#004080",
  secondary: "#0059b3",
}

type Props = {
  /** Object representing auth part of state */
  auth: Object,
  /** Object representing cart part of state */
  cart: Object,
  /** Object representing navbar part of state */
  navbar: Object,
  /** Object representing footer part of state */
  footer: Object,
  /** Action creator to fetch navbar content */
  fetchNavbar: Function,
  /** Action creator to fetch footer content */
  fetchFooter: Function,
}

export class App extends Component<Props> {
  componentDidMount() {
    const { fetchNavbar, fetchFooter } = this.props
    fetchNavbar()
    fetchFooter()
  }

  render() {
    const { auth, cart, navbar, footer } = this.props
    // if any errors, fall back to old link setup
    if (navbar.error || !navbar.links || footer.error || !footer.links) {
      return (
        <div>
          {auth.isAuthenticated ? (
            <Header items={loggedHeaderItems}>
              {items => items.map(generateLinks)}
            </Header>
          ) : (
            <Header items={headerItems}>
              {items => items.map(generateLinks)}
            </Header>
          )}
          <br />
          <Navbar items={navItems} theme={navTheme} />
          <br />
          <Cart cart={cart} />
          <MainBodyContainer>
            <ErrorBoundary>
              <RenderRoutes {...this.props} />
            </ErrorBoundary>
          </MainBodyContainer>
          <Footer items={footerItems} />
        </div>
      )
    }

    return (
      <div>
        {auth.isAuthenticated ? (
          <Header items={loggedHeaderItems}>
            {items => items.map(generateLinks)}
          </Header>
        ) : (
          <Header items={headerItems}>
            {items => items.map(generateLinks)}
          </Header>
        )}
        <br />
        <Navbar items={navbar.links} theme={navTheme} />
        <br />
        <Cart cart={cart} />
        <MainBodyContainer>
          <ErrorBoundary>
            <RenderRoutes {...this.props} />
          </ErrorBoundary>
        </MainBodyContainer>
        <Footer items={footer.links} />
      </div>
    )
  }
}

const mapStateToProps = ({ auth, cart, navbar, footer }) => ({
  auth,
  cart,
  navbar,
  footer,
})

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNavbar, fetchFooter },
  )(App),
)
