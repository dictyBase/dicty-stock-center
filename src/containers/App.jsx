import React, { Component, PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from 'dicty-components-header-footer'
import { Navbar } from 'dicty-components-navbar'
import Cart from 'components/Cart'
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

import Login from 'components/Login'
import OauthCallback from 'components/OauthCallback'
import { AuthLoader, Logout } from 'components/Auth'
import Home from 'components/Home'
import MyDsc from 'components/MyDsc'
import Error from 'components/Error'
import Order from 'components/Order'
import ShoppingCart from 'components/ShoppingCart'
import InfoPage from 'components/InfoPage'
import EditInfoPage from 'components/InfoPage/EditInfoPage'
import Contact from 'components/Contact'
import PageNotReady from 'components/PageNotReady'
import Strains from 'components/Strains'
import StrainDetail from 'components/Strains/StrainDetail'
import Plasmids from 'components/Plasmids'
import PlasmidDetail from 'components/Plasmids/PlasmidDetail'

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
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path=":name/information" component={ InfoPage } />
                        <Route exact path=":name/information/edit" component={ EditInfoPage } />
                        <Route exact path="login" component={ Login } />
                        <Route exact path=":provider/callback" component={ OauthCallback } />
                        <Route exact path="load/auth" component={ AuthLoader } />
                        <Route exact path="strains" component={ Strains } />
                        <Route exact path="strains/:id" component={ StrainDetail } />
                        <Route exact path="plasmids" component={ Plasmids } />
                        <Route exact path="plasmids/:id" component={ PlasmidDetail } />
                        <Route exact path="contact" component={ Contact } />
                        <Route exact path="logout" component={ Logout } />
                        <Route exact path="my-dsc" component={ MyDsc } />
                        <Route exact path="error" component={ Error } />
                        <Route exact path="cart" component={ ShoppingCart } />
                        <Route exact path="order" component={ Order } />
                        <Route component={ PageNotReady } />
                    </Switch>
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
