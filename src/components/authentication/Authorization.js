// @flow
import { connect } from "react-redux"
import { PermissionAPI, RoleAPI } from "utils/apiClasses"
import { dscedit } from "constants/resources"
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
  const { loggedInUser, roles } = props
  return props.render({
    canEditPages: loggedInUser.verifyPermissions("write", dscedit),
    isSuperUser: roles.checkRoles("superuser")
  })
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  if (state.auth.user) {
    const loggedInUser = new PermissionAPI(state.auth.user)
    const roles = new RoleAPI(state.auth.user)
    return {
      loggedInUser: loggedInUser,
      roles: roles
    }
  } else {
    return {
      loggedInUser: { verifyPermissions: () => {} },
      roles: { checkRoles: () => {} }
    }
  }
}

export default connect(mapStateToProps)(Authorization)
