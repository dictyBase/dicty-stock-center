import React, { Component, PropTypes } from 'react'
import { Header, Footer } from 'dicty-components-header-footer'
import { Navbar } from 'dicty-components-navbar'
import Cart from 'components/Cart'
import Routes from 'components/Routes'
import { connect } from 'react-redux'
import { StyleRoot } from 'radium'
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
    displayName = 'the primary app component';
    static propTypes = {
        auth: PropTypes.object.isRequired,
        authActions: PropTypes.object.isRequired,
        stockCenter: PropTypes.object.isRequired,
        stockCenterActions: PropTypes.object.isRequired
    };
    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
        })
    };
    render() {
        return (
            <StyleRoot>
                <div>
                    <Header
                      auth={ this.props.auth }
                      authActions={ this.props.authActions }
                      downloads=""
                      info=""
                      cite=""
                    />
                    <Navbar items={ NavbarLinks } />
                    <Cart cart={ this.props.cart }/>
                    <Routes />
                    <Footer items={ FooterLinks } />
                </div>
            </StyleRoot>
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

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch),
        orderActions: bindActionCreators(
            Object.assign({}, shippingActionCreators, paymentActionCreators, submitActionCreators),
            dispatch
        ),
        pageActions: bindActionCreators(pageActionCreators, dispatch),
        routerActions: bindActionCreators(routerActions, dispatch),
        stockCenterActions: bindActionCreators(dscActionsCreators, dispatch),
        cartActions: bindActionCreators(cartActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
