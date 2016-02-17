import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
import AuthNavbar from 'components/AuthNavbar'
import { bindActionCreators } from 'redux'
import * as authActionCreators from 'actions/auth'

class App extends Component {
    displayName = 'the primary app component';
    static propTypes = {
        auth: PropTypes.object.isRequired
    };
    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
        })
    };
    render() {
        const { isAuthenticated } = this.props.auth
        const navbar = isAuthenticated ? <Navbar {...this.props}/> : <AuthNavbar {...this.props}/>
        return (
          <div>
            { navbar }
            { this.renderChildren() }
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { auth } = state
    return { auth: auth, routeProps: ownProps }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
