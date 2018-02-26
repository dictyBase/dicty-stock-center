// add flow
import { Component } from "react"
import { oAuthLogin } from "actions/auth"
import { connect } from "react-redux"

class OauthSignHandler extends Component {
  onMessage = event => {
    event.preventDefault()
    event.stopPropagation()
    if (!event.data.provider) {
      return
    }
    this.props.oAuthLogin(event.data)
  }
  componentDidMount() {
    window.addEventListener("message", this.onMessage, false)
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.onMessage)
  }
  render() {
    return null
  }
}

export default connect(null, { oAuthLogin })(OauthSignHandler)
