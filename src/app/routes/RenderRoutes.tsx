import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Loader from "common/components/Loader"
import useGoogleAnalytics from "common/hooks/useGoogleAnalytics"

const Homepage = lazy(
  () => import(/* webpackChunkName: "Homepage" */ "features/Home/Homepage"),
)

// authentication routes
const Login = lazy(
  () => import(/* webpackChunkName: "Login" */ "features/Authentication/Login"),
)
const OauthCallback = lazy(
  () =>
    import(
      /* webpackChunkName: "OauthCallback" */ "features/Authentication/OauthCallback"
    ),
)
const AuthLoader = lazy(
  () =>
    import(
      /* webpackChunkName: "AuthLoader" */ "features/Authentication/AuthLoader"
    ),
)
const Logout = lazy(
  () =>
    import(/* webpackChunkName: "Logout" */ "features/Authentication/Logout"),
)
const MyDscPage = lazy(
  () => import(/* webpackChunkName: "MyDscPage" */ "features/MyDsc/MyDscPage"),
)

// editable page routes
const InformationContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "Information" */ "features/EditablePages/Information"
    ),
)
const InfoPageContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "InfoPageContainer" */ "features/EditablePages/InfoPageContainer"
    ),
)
const EditInfoPage = lazy(
  () =>
    import(
      /* webpackChunkName: "EditInfoPage" */ "features/EditablePages/EditInfoPage"
    ),
)

const AddPage = lazy(
  () =>
    import(
      /* webpackChunkName: "EditInfoPage" */ "features/EditablePages/AddPage"
    ),
)

// strain routes
const StrainCatalogWrapper = lazy(
  () =>
    import(
      /* webpackChunkName: "StrainCatalogWrapper" */ "features/Stocks/Catalogs/common/CatalogWrapper"
    ),
)
const StrainDetailsContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "StrainDetailsContainer" */ "features/Stocks/Details/Strains/StrainDetailsContainer"
    ),
)

// phenotype routes
const PhenotypesWrapper = lazy(
  () =>
    import(
      /* webpackChunkName: "PhenotypesWrapper" */ "features/Stocks/SearchResults/PhenotypeContainer"
    ),
)

// plasmid routes
const PlasmidCatalogWrapper = lazy(
  () =>
    import(
      /* webpackChunkName: "PlasmidCatalogWrapper" */ "features/Stocks/Catalogs/common/CatalogWrapper"
    ),
)
const PlasmidDetailsContainer = lazy(
  () =>
    import(
      /* webpackChunkName: "PlasmidDetailsContainer" */ "features/Stocks/Details/Plasmids/PlasmidDetailsContainer"
    ),
)

// order form routes
const OrderForm = lazy(
  () =>
    import(/* webpackChunkName: "OrderForm" */ "features/OrderForm/OrderForm"),
)
const OrderConfirmation = lazy(
  () =>
    import(
      /* webpackChunkName: "OrderConfirmation" */ "features/OrderForm/OrderConfirmation"
    ),
)

// misc routes
const ContactPage = lazy(
  () =>
    import(
      /* webpackChunkName: "ContactPage" */ "features/Contact/ContactPage"
    ),
)
const ShoppingCartPage = lazy(
  () =>
    import(
      /* webpackChunkName: "ShoppingCartPage" */ "features/ShoppingCart/ShoppingCartPage"
    ),
)

// custom 404 route
const PageNotReady = lazy(
  () =>
    import(
      /* webpackChunkName: "PageNotReady" */ "features/Errors/PageNotReady"
    ),
)

const RenderRoutes = () => {
  useGoogleAnalytics()

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* authentication routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/:provider/callback" component={OauthCallback} />
        <Route exact path="/load/auth" component={AuthLoader} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/mydsc" component={MyDscPage} />
        {/* editable page routes */}
        <Route exact path="/information" component={InformationContainer} />
        <Route exact path="/information/:name" component={InfoPageContainer} />
        <PrivateRoute
          exact
          path="/information/:name/edit"
          component={EditInfoPage}
        />
        <PrivateRoute exact path="/addpage" component={AddPage} />
        {/* order form routes */}
        <Route exact path="/order" component={OrderForm} />
        <Route exact path="/order/checkout" component={OrderForm} />
        <Route exact path="/order/submitted" component={OrderConfirmation} />
        {/* strain routes */}
        <Route
          exact
          path="/strains"
          render={(props) => (
            <StrainCatalogWrapper {...props} stockType="strain" />
          )}
        />
        <Route exact path="/strains/:id" component={StrainDetailsContainer} />
        {/* phenotype routes */}
        <Route exact path="/phenotypes/:name" component={PhenotypesWrapper} />
        {/* plasmid routes */}
        <Route
          exact
          path="/plasmids"
          render={(props) => (
            <PlasmidCatalogWrapper {...props} stockType="plasmid" />
          )}
        />
        <Route exact path="/plasmids/:id" component={PlasmidDetailsContainer} />
        {/* misc routes */}
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/cart" component={ShoppingCartPage} />
        <Route exact path="*" component={PageNotReady} />
      </Switch>
    </Suspense>
  )
}

export default RenderRoutes
