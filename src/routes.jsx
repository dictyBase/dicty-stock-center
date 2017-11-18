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

// convert to array map later
export default class Routes extends Component {
    displayName = 'list of routes';
    render() {
        return (
            <Switch>
                <Route exact path="/" render={ () => <Home {...this.props} /> } />
                <Route exact path="/:name/information" render={ ({location, match}) =>
                    <InfoPage {...this.props} { ...location } match={ match } /> } />
                <Route exact path="/:name/information/edit" render={ ({match}) =>
                    <EditInfoPage {...this.props} match={ match } /> } />
                <Route exact path="/login" render={ () => <Login {...this.props} /> } />
                <Route exact path="/:provider/callback" render={ () => <OauthCallback {...this.props} /> } />
                <Route exact path="/load/auth" render={ () => <AuthLoader {...this.props} /> } />
                <Route exact path="/strains" render={ () => <Strains {...this.props} /> } />
                <Route exact path="/strains/:id" render={ () => <StrainDetail {...this.props} /> } />
                <Route exact path="/plasmids" render={ () => <Plasmids {...this.props} /> } />
                <Route exact path="/plasmids/:id" render={ () => <PlasmidDetail {...this.props} /> } />
                <Route exact path="/contact" render={ () => <Contact {...this.props} /> } />
                <Route exact path="/logout" render={ () => <Logout {...this.props} /> } />
                <Route exact path="/my-dsc" render={ () => <MyDsc {...this.props} /> } />
                <Route exact path="/error" render={ () => <Error {...this.props} /> } />
                <Route exact path="/cart" render={ () => <ShoppingCart {...this.props} /> } />
                <Route exact path="/order" render={ () => <Order {...this.props} /> } />
                <Route component={ PageNotReady } />
            </Switch>
        )
    }
}

