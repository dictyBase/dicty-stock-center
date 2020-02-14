import { useAuthStore } from "components/authentication/AuthStore"
import { RolesPermissionsAPI } from "utils/apiClasses"
import { dsccontent } from "constants/resources"
import jwtDecode from "jwt-decode"

const verifyToken = (token: string) => {
  if (token === "") {
    return false
  }
  const decodedToken = jwtDecode(token)
  // get current time in plain UTC
  const currentTime = Date.now().valueOf() / 1000
  // check if current time is less than token expiration date
  // @ts-ignore
  if (currentTime < decodedToken.exp) {
    return true
  }
  return false
}

/**
 * useAuthorization is used to handle user authorization checks.
 */

const useAuthorization = () => {
  const [state] = useAuthStore()
  let canEditPages = false

  if (state.user.id) {
    let loggedInUser = new RolesPermissionsAPI(state)
    canEditPages = loggedInUser.verifyPermissions("write", dsccontent)
  }

  const verifiedToken = verifyToken(state.token)
  return { user: state.user, canEditPages, verifiedToken }
}

export default useAuthorization
