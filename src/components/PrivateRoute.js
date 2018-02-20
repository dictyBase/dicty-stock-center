import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// function uses same API as <Route />
const PrivateRoute = ({ component: Component, ...rest }) => (
    // renders a <Route /> and passes all props
    <Route {...rest} render={(props) => (
        // checks for authentication, then redirects if logged out
        props.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    )} />
)

const mapStateToProps = ({isAuthenticated}) => ({isAuthenticated})

export default connect(mapStateToProps)(PrivateRoute)