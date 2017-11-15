import { Route, Switch } from 'react-router-dom'
import React from 'react'
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

// export default (
//         <Switch>
//             <Route exact path="/" component={ Home } />
//             <Route exact path=":name/information" component={ InfoPage } />
//             <Route exact path=":name/information/edit" component={ EditInfoPage } />
//             <Route exact path="login" component={ Login } />
//             <Route exact path=":provider/callback" component={ OauthCallback } />
//             <Route exact path="load/auth" component={ AuthLoader } />
//             <Route exact path="strains" component={ Strains } />
//             <Route exact path="strains/:id" component={ StrainDetail } />
//             <Route exact path="plasmids" component={ Plasmids } />
//             <Route exact path="plasmids/:id" component={ PlasmidDetail } />
//             <Route exact path="contact" component={ Contact } />
//             <Route exact path="logout" component={ Logout } />
//             <Route exact path="my-dsc" component={ MyDsc } />
//             <Route exact path="error" component={ Error } />
//             <Route exact path="cart" component={ ShoppingCart } />
//             <Route exact path="order" component={ Order } />
//             <Route component={ PageNotReady } />
//         </Switch>
// )

export default [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    },
    {
        path: '/',
        Component: Home
    }
]