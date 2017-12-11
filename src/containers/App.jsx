import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from 'dicty-components-header-footer'
import { Navbar } from 'dicty-components-navbar'
import Cart from 'components/Cart'
import RenderRoutes from 'components/RenderRoutes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActionCreators from 'actions/auth'
import * as shippingActionCreators from 'actions/order/shipping'
import * as paymentActionCreators from 'actions/order/payment'
import * as submitActionCreators from 'actions/order/submit'
import * as pageActionCreators from 'actions/page'
import * as dscActionsCreators from 'actions/stockCenter'
import * as cartActionCreators from 'actions/cart'
import { routerActions } from 'react-router-redux'
import { FooterLinks } from 'constants/Footer'
import { NavbarLinks } from 'constants/Navbar'

class App extends Component {
    displayName = 'the primary app component'
    static propTypes = {
        auth: PropTypes.object.isRequired,
        authActions: PropTypes.object.isRequired,
        stockCenter: PropTypes.object.isRequired,
        stockCenterActions: PropTypes.object.isRequired
    }
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

const mapStateToProps = (state, ownProps) => {
    const { auth, order, page, stockCenter, cart } = state
    return {
        auth: auth,
        routeProps: ownProps,
        order: order,
        page: page,
        stockCenter: stockCenter,
        cart: cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch),
        orderActions: bindActionCreators(
            Object.assign(
                {},
                shippingActionCreators,
                paymentActionCreators,
                submitActionCreators
            ),
            dispatch
        ),
        pageActions: bindActionCreators(pageActionCreators, dispatch),
        routerActions: bindActionCreators(routerActions, dispatch),
        stockCenterActions: bindActionCreators(dscActionsCreators, dispatch),
        cartActions: bindActionCreators(cartActionCreators, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
