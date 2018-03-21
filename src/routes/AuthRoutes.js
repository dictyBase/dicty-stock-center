import Login from "components/authentication/Login"
import OauthCallback from "components/authentication/OauthCallback"
import AuthLoader from "components/authentication/AuthLoader"
import Logout from "components/authentication/Logout"
import MyDsc from "components/MyDsc"

export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/:provider/callback",
    component: OauthCallback
  },
  {
    path: "/load/auth",
    component: AuthLoader
  },
  {
    path: "/logout",
    component: Logout
  },
  {
    path: "/mydsc",
    auth: true,
    component: MyDsc
  }
]
