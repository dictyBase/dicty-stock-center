import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuthStore } from "features/Authentication/AuthStore"

/**
 * PrivateRoute redirects user from route if not authenticated.
 */
const PrivateRoute = ({ component }: { component: any }) => {
  const { state } = useAuthStore()

  if (state.isAuthenticated) {
    return <>{component}</>
  }
  return (
    <Navigate
      to={{
        pathname: "/login",
      }}
      state={{ error: "You must be logged in to view this page!" }}
    />
  )
}

export default PrivateRoute
