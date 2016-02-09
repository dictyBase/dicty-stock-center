import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
import Login from 'components/Login'

class App extends Component {
    displayName = 'the primary app component';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string
    };
    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props
        return (
          <div>
            <Navbar
              isAuthenticated={ isAuthenticated }
              errorMessage={ errorMessage }
              dispatch={ dispatch }
            />
                { !isAuthenticated &&
                    <Login />
                }
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps)(App)
