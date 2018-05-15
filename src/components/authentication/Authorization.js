import { Component } from "react"
import { connect } from "react-redux"
import { PermissionAPI, RoleAPI } from "utils/apiClasses"
import { dscedit } from "constants/resources"

class Authorization extends Component {
  render() {
    const { loggedInUser, roles } = this.props
    return this.props.render({
      canEditPages: loggedInUser.verifyPermissions("write", dscedit),
      isSuperUser: roles.checkRoles("superuser")
    })
  }
}

const mapStateToProps = state => {
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
