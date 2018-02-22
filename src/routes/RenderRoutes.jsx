import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import AuthRoutes from './AuthRoutes'
import GeneralRoutes from './GeneralRoutes'
import InfoPageRoutes from './InfoPageRoutes'
import OrderRoutes from './OrderRoutes'
import PlasmidRoutes from './PlasmidRoutes'
import StrainRoutes from './StrainRoutes'
import Home from 'components/Home'
import PageNotReady from 'components/PageNotReady'

const RenderRoutes = () => {
  RenderRoutes.displayName = 'list of routes'
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {AuthRoutes.map((route, i) => {
        if (route.auth) {
          return (
            <PrivateRoute
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
      {GeneralRoutes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
      {InfoPageRoutes.map((route, i) => {
        if (route.auth) {
          return (
            <PrivateRoute
              exact
              key={i}
              path={route.path}
              component={route.component}
            />
          )
        }
        return (
          <Route exact key={i} path={route.path} component={route.component} />
        )
      })}
      {OrderRoutes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
      {PlasmidRoutes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
      {StrainRoutes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
      <Route exact path="*" component={PageNotReady} />
    </Switch>
  )
}

export default RenderRoutes
