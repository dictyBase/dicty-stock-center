import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import React, { Component } from "react"
import { logoutUser } from "actions/auth"

class Logout extends Component {
  displayName = "logout confirmation"

  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return (
      <Redirect to="/" />
    )
  }
}

export default connect(null, { logoutUser })(Logout)
