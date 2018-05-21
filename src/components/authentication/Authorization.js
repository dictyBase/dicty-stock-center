// @flow
import { connect } from "react-redux"
import { PermissionAPI, RoleAPI, AuthenticatedUser } from "utils/apiClasses"
import { dsccontent } from "constants/resources"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** contains the object representing the logged in user's data */
  loggedInUser: Object,
  /** contains the object representing the logged in user's roles information */
  roles: Object,
  /** render props; function passed in by another component */
  render: Function
}

/** This uses render props to provide access to different areas of DSC based on user permissions. */

const Authorization = (props: Props) => {
  const { loggedInUser, roles, fetchedUserData } = props
  return props.render({
    canEditPages: loggedInUser.verifyPermissions("write", dsccontent),
    isSuperUser: roles.checkRoles("superuser"),
    fetchedUserData: fetchedUserData
  })
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  if (state.auth.user && state.auth.fetchedUserData) {
    const loggedInUser = new PermissionAPI(state.auth.user)
    const roles = new RoleAPI(state.auth.user)
    const fetchedUserData = new AuthenticatedUser(state.auth.fetchedUserData)
    return {
      loggedInUser: loggedInUser,
      roles: roles,
      fetchedUserData: fetchedUserData
    }
  } else {
    return {
      loggedInUser: { verifyPermissions: () => {} },
      roles: { checkRoles: () => {} },
      fetchedUserData: {}
    }
  }
}

export default connect(mapStateToProps)(Authorization)
