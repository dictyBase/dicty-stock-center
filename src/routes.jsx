import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from 'containers/App'
import Login from 'components/Login'
import OauthCallback from 'components/OauthCallback'
import { AuthLoader, Logout } from 'components/Auth'
import Home from 'components/Home'
import Profile from 'components/Profile'
import Error from 'components/Error'
import Shipping from 'components/form/Shipping'
import EditShipping from 'components/form/EditShipping'
import SubmitLoader from 'components/form/SubmitLoader'
import Order from 'components/Order'
import OrderConfirmation from 'components/OrderConfirmation'
import ShoppingCart from 'components/ShoppingCart'
import Payment from 'components/form/Payment'
import EditPayment from 'components/form/EditPayment'
import Submit from 'components/form/Submit'
import Page from 'components/Page'
import EditPage from 'components/EditPage'

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="page/:name" component={ Page } />
        <Route path="page/:name/edit" component={ EditPage } />
        <Route path="login" component={ Login } />
        <Route path=":provider/callback" component={ OauthCallback } />
        <Route path="load/auth" component={ AuthLoader } />
        <Route path="logout" component={ Logout } />
        <Route path="home/profile" component={ Profile } />
        <Route path="error" component={ Error } />
        <Route path="order" component={ Order }>
            <Route path="cart" component={ ShoppingCart } />
            <Route path="shipping" component={ Shipping } />
            <Route path="shipping/edit" component={ EditShipping } />
            <Route path="payment" component={ Payment } />
            <Route path="payment/edit" component={ EditPayment } />
            <Route path="submit" component={ Submit } />
            <Route path="submitting" component={ SubmitLoader } />
            <Route path="submitted" component={ OrderConfirmation } />
        </Route>
    </Route>
)


