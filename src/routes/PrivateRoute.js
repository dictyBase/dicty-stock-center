import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// function uses same API as <Route />
const PrivateRoute = ({ component: Component, ...rest }) => (
  // renders a <Route /> and passes all props
  <Route
    {...rest}
    render={props =>
      // checks for authentication, then redirects if not logged in
      rest.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(PrivateRoute)
