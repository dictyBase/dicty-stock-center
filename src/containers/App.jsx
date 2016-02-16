import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
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
        return (
          <div>
            <Navbar
              isAuthenticated={ isAuthenticated }
            />
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
