import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormContactInfo extends Component {
    displayName = 'form contact information';

    static propTypes = {
        phone: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired
    }

    render() {
        const { phone, email } = this.props
        return (
            <div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" className="form-control" { ...phone } />
                </div>
                <div className="form-group">
                    <span className="text-danger">* </span>
                    <label>Email:</label>
                    <input type="email" className="form-control" { ...email } />
                </div>
            </div>
        )
    }
}
