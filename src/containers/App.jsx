// @flow
import React, { Component } from "react"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "utils/headerItems"
import Cart from "components/Cart"
import RenderRoutes from "routes/RenderRoutes"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { FooterLinks } from "constants/Footer"
import { NavbarLinks } from "constants/Navbar"
import type { MapStateToProps } from "react-redux"

type Props = {
  cart: Object,
  auth: Object,
}

class App extends Component<Props> {
  displayName = "the primary app component"

  render() {
    return (
      <div>
        {this.props.auth.isAuthenticated ? (
          <Header items={loggedHeaderItems}>
            {items => items.map(generateLinks)}
          </Header>
        ) : (
          <Header items={headerItems}>
            {items => items.map(generateLinks)}
          </Header>
        )}
        <br />
        <Navbar items={NavbarLinks} />
        <br />
        <Cart cart={this.props.cart} />
        <RenderRoutes {...this.props} />
        <Footer items={FooterLinks} />
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth, cart }) => ({
  auth,
  cart,
})

export default withRouter(connect(mapStateToProps)(App))
