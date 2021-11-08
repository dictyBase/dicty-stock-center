import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuthStore } from "features/Authentication/AuthStore"

/**
 * PrivateRoute redirects user from route if not authenticated.
 * This uses the same API as <Route/>
 */
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { state } = useAuthStore()

  return (
    // renders a <Route /> and passes all props
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) =>
        // checks for authentication, then redirects if not logged in
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
            }}
            state={{ error: "You must be logged in to view this page!" }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
