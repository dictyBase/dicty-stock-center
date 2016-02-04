import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

class App extends Component {

  render () {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          <p>Authenticated: {JSON.stringify(isAuthenticated)}</p>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(App)
