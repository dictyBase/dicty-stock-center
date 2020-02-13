// @flow
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuthStore } from "components/authentication/AuthStore"

/**
 * This is a protected route that redirects an authenticated user away from the /login route.
 * If the user is not logged in, /login works as normal.
 */

// function uses same API as <Route />
const LoginRoute = ({ component: Component, ...rest }: any) => {
  const [{ isAuthenticated }] = useAuthStore()

  return (
    // renders a <Route /> and passes all props
    <Route
      {...rest}
      render={props =>
        // checks for authentication and redirects if logged in
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/",
              state: { error: "You must be logged in to view this page!" },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default LoginRoute
