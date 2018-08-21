// @flow
import { connect } from "react-redux"
import {
  RolesPermissionsAPI,
  AuthenticatedUser,
  AuthAPI,
} from "utils/apiClasses"
import { dsccontent } from "constants/resources"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** contains the object representing the logged in user's data */
  loggedInUser: Object,
  /** contains the object representing the logged in user's roles information */
  roles: Object,
  /** contains the object representing the fetched (non-authenticated) user's data */
  fetchedUserData: Object,
  /** contains the object representing the AuthAPI */
  verifiedToken: Object,
  /** render props; function passed in by another component */
  render: Function,
}

/** This uses render props to provide access to different areas of DSC based on user permissions. */

export const Authorization = (props: Props) => {
  const { loggedInUser, fetchedUserData, verifiedToken } = props
  return props.render({
    canEditPages: loggedInUser.verifyPermissions("write", dsccontent),
    fetchedUserData,
    verifiedToken: verifiedToken.verifyToken(),
  })
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  if (state.auth.user && state.auth.fetchedUserData) {
    const loggedInUser = new RolesPermissionsAPI(state.auth.user)
    const fetchedUserData = new AuthenticatedUser(state.auth.fetchedUserData)
    const verifiedToken = new AuthAPI(state.auth)
    return {
      loggedInUser,
      fetchedUserData,
      verifiedToken,
    }
  }
  if (state.auth.user) {
    const loggedInUser = new RolesPermissionsAPI(state.auth.user)
    const verifiedToken = new AuthAPI(state.auth)
    return {
      loggedInUser,
      verifiedToken,
    }
  }
  return {
    loggedInUser: { verifyPermissions: () => {} },
    fetchedUserData: {},
    verifiedToken: { verifyToken: () => {} },
  }
}

export default connect(mapStateToProps)(Authorization)
