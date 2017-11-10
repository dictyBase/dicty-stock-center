import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from 'containers/App'
import Login from 'components/Login'
import OauthCallback from 'components/OauthCallback'
import { AuthLoader, Logout } from 'components/Auth'
import Home from 'components/Home'
import MyDsc from 'components/MyDsc'
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
import InfoPage from 'components/InfoPage'
import EditInfoPage from 'components/InfoPage/EditInfoPage'
import Contact from 'components/Contact'
import PageNotReady from 'components/PageNotReady'
import Strains from 'components/Strains'
import StrainDetail from 'components/Strains/StrainDetail'
import Plasmids from 'components/Plasmids'
import PlasmidDetail from 'components/Plasmids/PlasmidDetail'

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path=":name/information" component={ InfoPage } />
        <Route path=":name/information/edit" component={ EditInfoPage } />
        <Route path="login" component={ Login } />
        <Route path=":provider/callback" component={ OauthCallback } />
        <Route path="load/auth" component={ AuthLoader } />
        <Route path="strains" component={ Strains } />
        <Route path="strains/:id" component={ StrainDetail } />
        <Route path="plasmids" component={ Plasmids } />
        <Route path="plasmids/:id" component={ PlasmidDetail } />
        <Route path="contact" component={ Contact } />
        <Route path="logout" component={ Logout } />
        <Route path="my-dsc" component={ MyDsc } />
        <Route path="error" component={ Error } />
        <Route path="cart" component={ ShoppingCart } />
        <Route path="order" component={ Order }>
            <Route path="shipping" component={ Shipping } />
            <Route path="shipping/edit" component={ EditShipping } />
            <Route path="payment" component={ Payment } />
            <Route path="payment/edit" component={ EditPayment } />
            <Route path="submit" component={ Submit } />
            <Route path="submitting" component={ SubmitLoader } />
            <Route path="submitted" component={ OrderConfirmation } />
        </Route>
        <Route path="*" component={ PageNotReady } />
    </Route>
)
