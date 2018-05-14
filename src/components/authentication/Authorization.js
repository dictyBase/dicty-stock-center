import { Component } from "react"
import { connect } from "react-redux"

class Authorization extends Component {
  checkPermissions(type) {
    const { user } = this.props.auth
    if (user && user.permissions) {
      return user.permissions.find(item => {
        return item.attributes.permission === type
      })
    } else {
      return null
    }
  }

  // checkRoles(type) {
  //   const { user } = this.props.auth
  //   if (user && user.roles) {
  //     return user.roles.find(item => {
  //       return item.attributes.role === type
  //     })
  //   } else {
  //     return null
  //   }
  // }

  render() {
    return this.props.render({
      canWrite: this.checkPermissions("write"),
      isAdmin: this.checkPermissions("admin")
      // isSuperUser: this.checkRoles("superuser")
    })
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Authorization)
