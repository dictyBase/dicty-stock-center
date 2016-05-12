import { Route } from 'react-router'
import React from 'react'
import App from 'containers/App'
import Login from 'components/Login'
import OauthCallback from 'components/OauthCallback'
import AuthLoader from 'components/AuthLoader'
import Home from 'components/Home'
import Profile from 'components/Profile'
import Error from 'components/Error'
import Shipping from 'components/form/Shipping'
import EditShipping from 'components/form/EditShipping'
import SubmitLoader from 'components/form/SubmitLoader'
import Order from 'components/Order'
import ShoppingCart from 'components/ShoppingCart'
import PaymentInfo from 'components/form/PaymentInfo'

export default (
    <Route path="/" component={ App }>
        <Route path="login" component={ Login } />
        <Route path=":provider/callback" component={ OauthCallback } />
        <Route path="load/auth" component={ AuthLoader } />
        <Route path="home" component={ Home } />
        <Route path="home/profile" component={ Profile } />
        <Route path="error" component={ Error } />
        <Route path="order" component={ Order }>
            <Route path="cart" component={ ShoppingCart } />
            <Route path="shipping" component={ Shipping } />
            <Route path="shipping/edit" component={ EditShipping } />
            <Route path="payment" component={ PaymentInfo } />
            <Route path="submitting" component={ SubmitLoader } />
        </Route>
    </Route>
)


