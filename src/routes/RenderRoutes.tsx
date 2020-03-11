import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Loader from "components/common/Loader"

const Homepage = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ "components/Home/Homepage"),
)

// authentication routes
const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ "components/authentication/Login"),
)
const OauthCallback = lazy(() =>
  import(
    /* webpackChunkName: "OauthCallback" */ "components/authentication/OauthCallback"
  ),
)
const AuthLoader = lazy(() =>
  import(
    /* webpackChunkName: "AuthLoader" */ "components/authentication/AuthLoader"
  ),
)
const Logout = lazy(() =>
  import(/* webpackChunkName: "Logout" */ "components/authentication/Logout"),
)
const MyDscPage = lazy(() =>
  import(/* webpackChunkName: "MyDscPage" */ "components/MyDsc/MyDscPage"),
)

// editable page routes
const InfoPageContainer = lazy(() =>
  import(
    /* webpackChunkName: "InfoPageContainer" */ "components/EditablePages/InfoPageContainer"
  ),
)
const EditInfoPage = lazy(() =>
  import(
    /* webpackChunkName: "EditInfoPage" */ "components/EditablePages/EditInfoPage"
  ),
)

// strain routes
const StrainCatalogWrapper = lazy(() =>
  import(
    /* webpackChunkName: "StrainCatalogWrapper" */ "components/Stocks/Catalogs/Strains/StrainCatalogWrapper"
  ),
)
const StrainDetailsContainer = lazy(() =>
  import(
    /* webpackChunkName: "StrainDetailsContainer" */ "components/Stocks/Details/Strains/StrainDetailsContainer"
  ),
)

// plasmid routes
const PlasmidCatalogWrapper = lazy(() =>
  import(
    /* webpackChunkName: "PlasmidCatalogWrapper" */ "components/Stocks/Catalogs/Plasmids/PlasmidCatalogWrapper"
  ),
)
const PlasmidDetailsContainer = lazy(() =>
  import(
    /* webpackChunkName: "PlasmidDetailsContainer" */ "components/Stocks/Details/Plasmids/PlasmidDetailsContainer"
  ),
)

// order form routes
const OrderForm = lazy(() =>
  import(/* webpackChunkName: "OrderForm" */ "components/OrderForm/OrderForm"),
)
const OrderConfirmation = lazy(() =>
  import(
    /* webpackChunkName: "OrderConfirmation" */ "components/OrderForm/OrderConfirmation"
  ),
)

// misc routes
const ContactPage = lazy(() =>
  import(
    /* webpackChunkName: "ContactPage" */ "components/Contact/ContactPage"
  ),
)
const ShoppingCartPage = lazy(() =>
  import(
    /* webpackChunkName: "ShoppingCartPage" */ "components/ShoppingCart/ShoppingCartPage"
  ),
)

// custom 404 route
const PageNotReady = lazy(() =>
  import(
    /* webpackChunkName: "PageNotReady" */ "components/Errors/PageNotReady"
  ),
)

const RenderRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* authentication routes */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/:provider/callback" component={OauthCallback} />
      <Route exact path="/load/auth" component={AuthLoader} />
      <PrivateRoute exact path="/logout" component={Logout} />
      <PrivateRoute exact path="/mydsc" component={MyDscPage} />
      {/* infopage routes */}
      <Route exact path="/information/:name" component={InfoPageContainer} />
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
      <Route exact path="/cart" component={ShoppingCartPage} />
      <Route exact path="*" component={PageNotReady} />
    </Switch>
  </Suspense>
)

export default RenderRoutes
