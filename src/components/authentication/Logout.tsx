import React, { useEffect } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Redirect } from "react-router-dom"
import { useAuthStore, ActionType } from "components/authentication/AuthStore"
import { LOGOUT } from "graphql/mutations"

/**
 * Allows the user to logout
 */

const Logout = () => {
  const [logout] = useMutation(LOGOUT)
  const [, dispatch] = useAuthStore()

  useEffect(() => {
    logout()
    dispatch({
      type: ActionType.LOGOUT,
    })
  }, [dispatch, logout])

  return <Redirect to="/" />
}

export default Logout
