import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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

export default class Routes extends Component {
    displayName = 'list of routes';
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path=":name/information" component={ InfoPage } />
                <Route exact path=":name/information/edit" component={ EditInfoPage } />
                <Route path="login" component={ Login } />
                <Route exact path=":provider/callback" component={ OauthCallback } />
                <Route path="load/auth" component={ AuthLoader } />
                <Route path="strains" component={ Strains } />
                <Route exact path="strains/:id" component={ StrainDetail } />
                <Route path="plasmids" component={ Plasmids } />
                <Route exact path="plasmids/:id" component={ PlasmidDetail } />
                <Route path="contact" component={ Contact } />
                <Route path="logout" component={ Logout } />
                <Route path="my-dsc" component={ MyDsc } />
                <Route path="error" component={ Error } />
                <Route path="cart" component={ ShoppingCart } />
                <Route path="order" component={ Order } />
                <Route component={ PageNotReady } />
            </Switch>
        )
    }
}