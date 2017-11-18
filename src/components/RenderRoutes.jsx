import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../routes'

export default class RenderRoutes extends Component {
    displayName = 'list of routes';
    render() {
        return (
            <Switch>
                { routes.map((route, i) => (
                    <Route
                        exact
                        key={ i }
                        path={ route.path }
                        render={ ({ match }) =>
                        <route.component {...this.props}
                        match={ match } /> }
                     />
                )) }
            </Switch>
        )
    }
}

