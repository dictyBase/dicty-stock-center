import { Component } from "react"
import { connect } from "react-redux"

class Authorization extends Component {
  checkPermissions(type) {
    const { user } = this.props.auth
    if (user && user.permissions) {
      return user.permissions.data.find(item => {
        return item.attributes.permission === type
      })
    } else {
      return null
    }
  }

  render() {
    return this.props.render({
      canWrite: this.checkPermissions("write"),
      isAdmin: this.checkPermissions("admin")
    })
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Authorization)
