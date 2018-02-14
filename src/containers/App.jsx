// @flow
import React, { Component } from 'react'
import { Header, Footer } from 'dicty-components-header-footer'
import { Navbar } from 'dicty-components-navbar'
import {headerItems, loggedHeaderItems} from 'utils/headerItems'
import Cart from 'components/Cart'
import RenderRoutes from 'components/RenderRoutes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FooterLinks } from 'constants/Footer'
import { NavbarLinks } from 'constants/Navbar'
import type { MapStateToProps } from 'react-redux'

type Props = {
    cart: Object,
    auth: Object
}

class App extends Component<Props> {
    displayName = 'the primary app component'

    render() {
        return (
            <div>
                { this.props.auth.isAuthenticated ? (
                    <Header items={loggedHeaderItems} />
                ) : (
                  <Header items={headerItems} />
                ) }
                <br />
                <Navbar items={ NavbarLinks } />
                <br />
                <Cart cart={ this.props.cart } />
                <RenderRoutes {...this.props} />
                <Footer items={ FooterLinks } />
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<*, *, *> = (state) => {
    const { auth, cart } = state
    return {
        auth: auth,
        cart: cart
    }
}

export default withRouter(connect(mapStateToProps)(App))
