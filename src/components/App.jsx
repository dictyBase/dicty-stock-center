// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowCircleRight,
  faCheckCircle,
  faDownload,
  faEnvelope,
  faExternalLinkAlt,
  faExclamationCircle,
  faHome,
  faInfoCircle,
  faPaperPlane,
  faPencilAlt,
  faPlus,
  faShare,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faTrash,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons"
import fetchNavbarAndFooter from "actions/navbar"
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

// define fontawesome icons used in the app
library.add(
  faArrowCircleRight,
  faCheckCircle,
  faDownload,
  faEnvelope,
  faExclamationCircle,
  faExternalLinkAlt,
  faHome,
  faInfoCircle,
  faPaperPlane,
  faPencilAlt,
  faPlus,
  faShare,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faTrash,
  faUser,
  faWrench,
)

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

export class App extends Component<Props> {
  componentDidMount() {
    const { fetchNavbarAndFooter } = this.props
    fetchNavbarAndFooter()
  }

  render() {
    const { auth, cart, navbar, footer } = this.props

    // if any errors, fall back to old link setup
    if (!navbar.links || !footer.links) {
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
    { fetchNavbarAndFooter },
  )(App),
)
