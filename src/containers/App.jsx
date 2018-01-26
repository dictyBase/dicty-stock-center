import React, { Component } from 'react'
import { Header, Footer } from 'dicty-components-header-footer'
import { Navbar } from 'dicty-components-navbar'
import Cart from 'components/Cart'
import RenderRoutes from 'components/RenderRoutes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FooterLinks } from 'constants/Footer'
import { NavbarLinks } from 'constants/Navbar'

class App extends Component {
    displayName = 'the primary app component'

    render() {
        return (
            <div>
                { this.props.auth.isAuthenticated ? (
                    <Header
                        downloads="/downloads"
                        info="/information"
                        cite="/citation"
                        logout="/logout"
                    />
                ) : (
                    <Header
                        downloads="/downloads"
                        info="/information"
                        cite="/citation"
                        login="/login"
                    />
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

const mapStateToProps = (state) => {
    const { auth, cart } = state
    return {
        auth: auth,
        cart: cart
    }
}

export default withRouter(connect(mapStateToProps)(App))
