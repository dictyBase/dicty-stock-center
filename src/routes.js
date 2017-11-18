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

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/:name/information',
        component: InfoPage
    },
    {
        path: '/:name/information/edit',
        component: EditInfoPage
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/:provider/callback',
        component: OauthCallback
    },
    {
        path: '/load/auth',
        component: AuthLoader
    },
    {
        path: '/strains',
        component: Strains
    },
    {
        path: '/strains/:id',
        component: StrainDetail
    },
    {
        path: '/plasmids',
        component: Plasmids
    },
    {
        path: '/plasmids/:id',
        component: PlasmidDetail
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/my-dsc',
        component: MyDsc
    },
    {
        path: '/error',
        component: Error
    },
    {
        path: '/cart',
        component: ShoppingCart
    },
    {
        path: '/order',
        component: Order
    },
    {
        path: '*',
        component: PageNotReady
    }
]

export default routes
