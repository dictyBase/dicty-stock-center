import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import LoginRoute from "./LoginRoute"
import AuthRoutes from "./AuthRoutes"
import GeneralRoutes from "./GeneralRoutes"
import InfoPageRoutes from "./InfoPageRoutes"
import OrderRoutes from "./OrderRoutes"
import PlasmidRoutes from "./PlasmidRoutes"
import StrainRoutes from "./StrainRoutes"
import Homepage from "components/Home/Homepage"
import PageNotReady from "components/PageNotReady"
import Login from "components/authentication/Login"

const RenderRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {[...AuthRoutes, ...InfoPageRoutes].map((route, i) => {
        if (route.auth) {
          return (
            <PrivateRoute
              exact
              key={i}
              path={route.path}
              component={route.component}
            />
          )
        } else if (route.component === Login) {
          return (
            <LoginRoute
              exact
              key={i}
              path={route.path}
              component={route.component}
            />
          )
        }
        return (
          <Route
            exact
            key={i}
            path={route.path}
            render={({ match, location }) => (
              <route.component
                {...this.props}
                match={match}
                location={location}
              />
            )}
          />
        )
      })}
      {[
        ...OrderRoutes,
        ...StrainRoutes,
        ...PlasmidRoutes,
        ...GeneralRoutes
      ].map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
      <Route exact path="*" component={PageNotReady} />
    </Switch>
  )
}

export default RenderRoutes
