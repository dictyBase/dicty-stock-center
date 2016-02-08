import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  displayName = 'logout button component';

  static propTypes = {
      onLogoutClick: PropTypes.func.isRequired
  };

  render() {
      const { onLogoutClick } = this.props

      return (
        <button onClick={() => onLogoutClick()} className="btn btn-primary">
          Logout
        </button>
      )
  }

}
