import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import useGoogleAnalytics from "common/hooks/useGoogleAnalytics"
import Loader from "common/components/Loader"

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

// order routes
const OrderRoutes = lazy(
  () =>
    import(/* webpackChunkName: "OrderRoutes" */ "features/OrderForm/OrderRoutes"),
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
const PageNotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "PageNotFound" */ "features/Errors/PageNotFound"
    ),
)

const RenderRoutes = () => {
  useGoogleAnalytics()

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />

          {/* authentication routes */}
          <Route path="login" element={<Login />} />
          <Route path=":provider/callback" element={<OauthCallback />} />
          <Route path="load/auth" element={<AuthLoader />} />
          <Route path="logout" element={<PrivateRoute component={Logout} />} />
          <Route
            path="mydsc"
            element={<PrivateRoute component={MyDscPage} />}
          />

          {/* editable page routes */}
          <Route path="information">
            <Route index element={<InformationContainer />} />
            <Route path=":name">
              <Route index element={<InfoPageContainer />} />
              <Route
                path="edit"
                element={<PrivateRoute component={EditInfoPage} />}
              />
            </Route>
          </Route>
          <Route
            path="addpage"
            element={<PrivateRoute component={AddPage} />}
          />

          {/* order form routes */}
          <Route path="order/*" element={<OrderRoutes />} />

          {/* strain routes */}
          <Route path="strains">
            <Route
              index
              element={<StrainCatalogWrapper stockType="strain" />}
            />
            <Route path=":id" element={<StrainDetailsContainer />} />
          </Route>

          {/* phenotype routes */}
          <Route path="phenotypes/:name" element={<PhenotypesWrapper />} />

          {/* plasmid routes */}
          <Route path="plasmids">
            <Route path=":id" element={<PlasmidDetailsContainer />} />
            <Route
              index
              element={<PlasmidCatalogWrapper stockType="plasmid" />}
            />
          </Route>

          {/* misc routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  )
}

export default RenderRoutes
