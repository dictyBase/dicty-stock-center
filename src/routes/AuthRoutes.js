import Login from 'components/Login'
import OauthCallback from 'components/OauthCallback'
import AuthLoader from 'components/Auth'
import Logout from 'components/Logout'
import MyDsc from 'components/MyDsc'

export default [
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
        path: '/logout',
        component: Logout
      },
      {
        path: '/mydsc',
        auth: true,
        component: MyDsc
      }
]