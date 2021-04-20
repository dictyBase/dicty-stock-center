import React, { useEffect } from "react"
import { useMutation, useApolloClient } from "@apollo/client"
import { Redirect } from "react-router-dom"
import { useAuthStore, ActionType } from "features/Authentication/AuthStore"
import { LOGOUT } from "common/graphql/mutations"

/**
 * Logout handles the user logout process.
 */
const Logout = () => {
  const client = useApolloClient()
  const [{ token }, dispatch] = useAuthStore()
  const [logout] = useMutation(LOGOUT, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })

  useEffect(() => {
    logout()
    dispatch({
      type: ActionType.LOGOUT,
    })
    client.resetStore()
  }, [dispatch, logout, client])

  return <Redirect to="/" />
}

export default Logout
