import { Component } from "react"
import { connect } from "react-redux"
import { dscedit } from "constants/resources"

class Authorization extends Component {
  checkPermissions(perm, resource) {
    const { user } = this.props.auth
    if (user && user.permissions) {
      return user.permissions.filter(
        item =>
          item.attributes.permission === "admin" ||
          (item.attributes.permission === perm &&
            item.attributes.resource === resource)
      )
    } else {
      return null
    }
  }

  checkRoles(role) {
    const { user } = this.props.auth
    if (user && user.roles) {
      return user.roles.filter(item => item.attributes.role === role)
    } else {
      return null
    }
  }

  render() {
    return this.props.render({
      canEditPages: this.checkPermissions("write", dscedit),
      isSuperUser: this.checkRoles("superuser")
    })
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Authorization)
