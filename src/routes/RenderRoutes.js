import React from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import PrivateRoute from "./PrivateRoute"
import LoginRoute from "./LoginRoute"
import Loader from "components/common/Loader"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
import StrainDetailsMockup from "components/Stocks/Strains/Details/Mockup/StrainDetailsMockup"

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
    import(
      "components/authentication/OauthCallback" /* webpackChunkName: "OauthCallback" */
    ),
  loading: Loader,
})
const AuthLoader = Loadable({
  loader: () =>
    import(
      "components/authentication/AuthLoader" /* webpackChunkName: "AuthLoader" */
    ),
  loading: Loader,
})
const Logout = Loadable({
  loader: () =>
    import("components/authentication/Logout" /* webpackChunkName: "Logout" */),
  loading: Loader,
})
const MyDscPage = Loadable({
  loader: () =>
    import("components/MyDsc/MyDscPage" /* webpackChunkName: "MyDsc" */),
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
    import(
      "components/InfoPage/EditInfoPage" /* webpackChunkName: "EditInfoPage" */
    ),
  loading: Loader,
})

// strain routes
const StrainCatalogWrapper = Loadable({
  loader: () =>
    import(
      "components/Stocks/Strains/Catalog/StrainCatalogWrapper" /* webpackChunkName: "StrainCatalogWrapper" */
    ),
  loading: StockDetailsLoader,
})
const StrainDetailsContainer = Loadable({
  loader: () =>
    import(
      "components/Stocks/Strains/Details/StrainDetailsContainer" /* webpackChunkName: "StrainDetailsContainer" */
    ),
  loading: StockDetailsLoader,
})

// plasmid routes
const PlasmidCatalogWrapper = Loadable({
  loader: () =>
    import(
      "components/Stocks/Plasmids/Catalog/PlasmidCatalogWrapper" /* webpackChunkName: "PlasmidCatalogWrapper" */
    ),
  loading: StockDetailsLoader,
})
const PlasmidDetailsContainer = Loadable({
  loader: () =>
    import(
      "components/Stocks/Plasmids/Details/PlasmidDetailsContainer" /* webpackChunkName: "PlasmidDetailsContainer" */
    ),
  loading: StockDetailsLoader,
})

// order form routes
const OrderForm = Loadable({
  loader: () =>
    import(
      "components/OrderForm/OrderForm" /* webpackChunkName: "OrderForm" */
    ),
  loading: Loader,
})
const OrderConfirmation = Loadable({
  loader: () =>
    import(
      "components/OrderForm/OrderConfirmation" /* webpackChunkName: "OrderConfirmation" */
    ),
  loading: Loader,
})

// misc routes
const ContactPage = Loadable({
  loader: () =>
    import(
      "components/Contact/ContactPage" /* webpackChunkName: "ContactPage" */
    ),
  loading: Loader,
})
const ErrorPage = Loadable({
  loader: () =>
    import("components/Errors/ErrorPage" /* webpackChunkName: "ErrorPage" */),
  loading: Loader,
})
const ShoppingCartPage = Loadable({
  loader: () =>
    import(
      "components/ShoppingCart/ShoppingCartPage" /* webpackChunkName: "ShoppingCartPage" */
    ),
  loading: Loader,
})

// custom 404 route
const PageNotReady = Loadable({
  loader: () =>
    import(
      "components/Errors/PageNotReady" /* webpackChunkName: "PageNotReady" */
    ),
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
    <PrivateRoute exact path="/mydsc" component={MyDscPage} />
    {/* infopage routes */}
    <Route exact path="/information/:name" component={InfoPage} />
    <PrivateRoute
      exact
      path="/information/:name/edit"
      component={EditInfoPage}
    />
    {/* order form routes */}
    <Route exact path="/order/checkout" component={OrderForm} />
    <Route exact path="/order/submitted" component={OrderConfirmation} />
    {/* strain routes */}
    <Route exact path="/strains" component={StrainCatalogWrapper} />
    <Route exact path="/strains/:id" component={StrainDetailsContainer} />
    {/* plasmid routes */}
    <Route exact path="/plasmids" component={PlasmidCatalogWrapper} />
    <Route exact path="/plasmids/:id" component={PlasmidDetailsContainer} />
    {/* misc routes */}
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/error" component={ErrorPage} />
    <Route exact path="/cart" component={ShoppingCartPage} />
    <Route exact path="/details-mockup" component={StrainDetailsMockup} />
    <Route exact path="*" component={PageNotReady} />
  </Switch>
)

export default RenderRoutes
