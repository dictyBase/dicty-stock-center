import React from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import PrivateRoute from "./PrivateRoute"
import LoginRoute from "./LoginRoute"
import Loader from "components/Loader"
// import InfoPage from "components/InfoPage/InfoPage"
// import EditInfoPage from "components/InfoPage/EditInfoPage"

// homepage route
const Homepage = Loadable({
  loader: () =>
    import("components/Home/Homepage" /* webpackChunkName: "Homepage" */),
  loading: Loader,
})

// authentication routes
const Login = Loadable({
  loader: () =>
    import("components/authentication/Login" /* webpackChunkName: "Login" */),
  loading: Loader,
})
const OauthCallback = Loadable({
  loader: () =>
    import("components/authentication/OauthCallback" /* webpackChunkName: "OauthCallback" */),
  loading: Loader,
})
const AuthLoader = Loadable({
  loader: () =>
    import("components/authentication/AuthLoader" /* webpackChunkName: "AuthLoader" */),
  loading: Loader,
})
const Logout = Loadable({
  loader: () =>
    import("components/authentication/Logout" /* webpackChunkName: "Logout" */),
  loading: Loader,
})
const MyDsc = Loadable({
  loader: () => import("components/MyDsc" /* webpackChunkName: "MyDsc" */),
  loading: Loader,
})

// infopage routes
const InfoPage = Loadable({
  loader: () =>
    import("components/InfoPage/InfoPage" /* webpackChunkName: "InfoPage" */),
  loading: Loader,
})
const EditInfoPage = Loadable({
  loader: () =>
    import("components/InfoPage/EditInfoPage" /* webpackChunkName: "EditInfoPage" */),
  loading: Loader,
})

// strains routes
const Strains = Loadable({
  loader: () => import("components/Strains" /* webpackChunkName: "Strains" */),
  loading: Loader,
})
const StrainDetail = Loadable({
  loader: () =>
    import("components/Strains/StrainDetail" /* webpackChunkName: "StrainDetail" */),
  loading: Loader,
})

// plasmids routes
const Plasmids = Loadable({
  loader: () =>
    import("components/Plasmids" /* webpackChunkName: "Plasmids" */),
  loading: Loader,
})
const PlasmidDetail = Loadable({
  loader: () =>
    import("components/Plasmids/PlasmidDetail" /* webpackChunkName: "PlasmidDetail" */),
  loading: Loader,
})

// order form routes
const Shipping = Loadable({
  loader: () =>
    import("components/form/Shipping" /* webpackChunkName: "Shipping" */),
  loading: Loader,
})
const EditShipping = Loadable({
  loader: () =>
    import("components/form/EditShipping" /* webpackChunkName: "EditShipping" */),
  loading: Loader,
})
const Payment = Loadable({
  loader: () =>
    import("components/form/Payment" /* webpackChunkName: "Payment" */),
  loading: Loader,
})
const EditPayment = Loadable({
  loader: () =>
    import("components/form/EditPayment" /* webpackChunkName: "EditPayment" */),
  loading: Loader,
})
const Submit = Loadable({
  loader: () =>
    import("components/form/Submit" /* webpackChunkName: "Submit" */),
  loading: Loader,
})
const SubmitLoader = Loadable({
  loader: () =>
    import("components/form/SubmitLoader" /* webpackChunkName: "SubmitLoader" */),
  loading: Loader,
})
const OrderConfirmation = Loadable({
  loader: () =>
    import("components/OrderConfirmation" /* webpackChunkName: "OrderConfirmation" */),
  loading: Loader,
})

// misc routes
const Contact = Loadable({
  loader: () => import("components/Contact" /* webpackChunkName: "Contact" */),
  loading: Loader,
})
const ErrorPage = Loadable({
  loader: () =>
    import("components/ErrorPage" /* webpackChunkName: "ErrorPage" */),
  loading: Loader,
})
const ShoppingCart = Loadable({
  loader: () =>
    import("components/ShoppingCart" /* webpackChunkName: "ShoppingCart" */),
  loading: Loader,
})

// custom 404 route
const PageNotReady = Loadable({
  loader: () =>
    import("components/PageNotReady" /* webpackChunkName: "PageNotReady" */),
  loading: Loader,
})

const RenderRoutes = () => (
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
    <Route exact path="/error" component={ErrorPage} />
    <Route exact path="/cart" component={ShoppingCart} />
    <Route exact path="*" component={PageNotReady} />
  </Switch>
)

export default RenderRoutes
