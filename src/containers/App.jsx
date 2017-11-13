import React, { Component, PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import DictyNavbar from 'components/DictyNavbar'
import DictyHeader from 'components/DictyHeader'
import DictyFooter from 'components/DictyFooter'
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
        const siteMap = [
            {
                name: 'Genomes',
                links: [
                    {name: 'Genomes Home', href: '/genomes'}
                ]
            },
            {
                name: 'Tools',
                links: [
                    {name: 'Tools Home', href: '/tools'},
                    {name: 'New Genome Browser', href: '/tools/jbrowse'}
                ]
            },
            {
                name: 'Explore',
                links: [
                    {name: 'Explore Home', href: '/explore'},
                    {name: 'Dicty Art', href: '/explore/art'},
                    {name: 'Gallery', href: '/explore/gallery'},
                    {name: 'Genome Resources', href: '/explore/resources'},
                    {name: 'Genome Statistics', href: '/explore/statistics'},
                    {name: 'Learn About Dicty', href: '/explore/learn'},
                    {name: 'Teaching Protocols', href: '/explore/teach'},
                    {name: 'Useful Links', href: '/explore/links'}
                ]
            },
            {
                name: 'Research',
                links: [
                    {name: 'Research Home', href: '/research'},
                    {name: 'Anatomy Ontology', href: '/research/ontology'},
                    {name: 'Codon Bias Table', href: '/research/codon'},
                    {name: 'Nomenclature Guidelines', href: '/research/nomenclature'},
                    {name: 'Phenotyping', href: '/research/phenotyping'},
                    {name: 'Techniques', href: '/research/techniques'}
                ]
            },
            {
                name: 'Dicty Stock Center',
                links: [
                    {name: 'Stock Center Home', href: '/stockcenter'}
                ]
            },
            {
                name: 'Community',
                links: [
                    {name: 'Community Home', href: '/community'},
                    {name: 'Cite Us', href: '/citation'},
                    {name: 'Dicty Annual Conferences', href: '/community/conference'},
                    {name: 'Dicty Email Forum', href: '/community/listserv'},
                    {name: 'Dicty Labs', href: '/community/labs'},
                    {name: 'History', href: '/community/history'},
                    {name: 'Jobs', href: '/community/jobs'},
                    {name: 'Upcoming Meetings', href: '/community/meetings'}
                ]
            }
        ]
        return (
            <StyleRoot>
                <div>
                    <DictyHeader
                      auth={ this.props.auth }
                      authActions={ this.props.authActions }
                    />
                    <DictyNavbar items={ siteMap } />
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
                    <DictyFooter items={ siteMap } />
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
