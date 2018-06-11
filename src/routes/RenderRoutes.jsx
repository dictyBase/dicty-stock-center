import React from "react"
import { Route, Switch } from "react-router-dom"
import asyncComponent from "utils/asyncComponent"
import PrivateRoute from "./PrivateRoute"
import LoginRoute from "./LoginRoute"

// homepage route
const Homepage = asyncComponent(() => import("components/Home/Homepage"))

// authentication routes
const Login = asyncComponent(() => import("components/authentication/Login"))
const OauthCallback = asyncComponent(() =>
  import("components/authentication/OauthCallback"),
)
const AuthLoader = asyncComponent(() =>
  import("components/authentication/AuthLoader"),
)
const Logout = asyncComponent(() => import("components/authentication/Logout"))
const MyDsc = asyncComponent(() => import("components/MyDsc"))

// infopage routes
const InfoPage = asyncComponent(() => import("components/InfoPage/InfoPage"))
const EditInfoPage = asyncComponent(() =>
  import("components/InfoPage/EditInfoPage"),
)

// strains routes
const Strains = asyncComponent(() => import("components/Strains"))
const StrainDetail = asyncComponent(() =>
  import("components/Strains/StrainDetail"),
)

// plasmids routes
const Plasmids = asyncComponent(() => import("components/Plasmids"))
const PlasmidDetail = asyncComponent(() =>
  import("components/Plasmids/PlasmidDetail"),
)

// order form routes
const Shipping = asyncComponent(() => import("components/form/Shipping"))
const EditShipping = asyncComponent(() =>
  import("components/form/EditShipping"),
)
const Payment = asyncComponent(() => import("components/form/Payment"))
const EditPayment = asyncComponent(() => import("components/form/EditPayment"))
const Submit = asyncComponent(() => import("components/form/Submit"))
const SubmitLoader = asyncComponent(() =>
  import("components/form/SubmitLoader"),
)
const OrderConfirmation = asyncComponent(() =>
  import("components/OrderConfirmation"),
)

// misc routes
const Contact = asyncComponent(() => import("components/Contact"))
const Error = asyncComponent(() => import("components/Error"))
const ShoppingCart = asyncComponent(() => import("components/ShoppingCart"))

// custom 404 route
const PageNotReady = asyncComponent(() => import("components/PageNotReady"))

const RenderRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* authentication routes */}
      <LoginRoute exact path="/login" component={Login} />
      <Route exact path="/:provider/callback" component={OauthCallback} />
      <Route exact path="/load/auth" component={AuthLoader} />
      <PrivateRoute exact path="/logout" component={Logout} />
      <PrivateRoute exact path="/mydsc" component={MyDsc} />
      {/* infopage routes */}
      <Route exact path="/information/:name" component={InfoPage} />
      <PrivateRoute
        exact
        path="/information/:name/edit"
        component={EditInfoPage}
      />
      {/* order form routes */}
      <Route exact path="/order/shipping" component={Shipping} />
      <Route exact path="/order/shipping/edit" component={EditShipping} />
      <Route exact path="/order/payment" component={Payment} />
      <Route exact path="/order/payment/edit" component={EditPayment} />
      <Route exact path="/order/submit" component={Submit} />
      <Route exact path="/order/submitting" component={SubmitLoader} />
      <Route exact path="/order/submitted" component={OrderConfirmation} />
      {/* strain routes */}
      <Route exact path="/strains" component={Strains} />
      <Route exact path="/strains/:id" component={StrainDetail} />
      {/* plasmid routes */}
      <Route exact path="/plasmids" component={Plasmids} />
      <Route exact path="/plasmids/:id" component={PlasmidDetail} />
      {/* misc routes */}
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/error" component={Error} />
      <Route exact path="/cart" component={ShoppingCart} />
      <Route exact path="*" component={PageNotReady} />
    </Switch>
  )
}

export default RenderRoutes
