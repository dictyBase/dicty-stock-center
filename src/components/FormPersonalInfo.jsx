import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormPersonalInfo extends Component {
    displayName = 'form personal information';

    static propTypes = {
        firstName: PropTypes.object.isRequired,
        lastName: PropTypes.object.isRequired,
        org: PropTypes.object.isRequired,
        group: PropTypes.object.isRequired
    }

    render() {
        const { firstName, lastName, org, group } = this.props
        return (
          <div>
              <div className="form-group">
                <span style={ {color: '#FF0000'} }>* </span>
                <label>First Name:</label>
                <input type="text" className="form-control" {...firstName} />
                { firstName.touched && firstName.error && <div>{ firstName.error }</div> }
              </div>
              <div className="form-group">
                <span style={ {color: '#FF0000'} }>* </span>
                <label>Last Name:</label>
                <input type="text" className="form-control" { ...lastName } />
                { lastName.touched && lastName.error && <div>{ lastName.error }</div> }
              </div>
              <div className="form-group">
                <span style={ {color: '#FF0000'} }>* </span>
                <label>Organization:</label>
                <input type="text" className="form-control" { ...org } />
              </div>
              <div className="form-group">
                <span style={ {color: '#FF0000'} }>* </span>
                <label>Lab/Group:</label>
                <input type="text" className="form-control" { ...group } />
              </div>
          </div>
        )
    }
}
