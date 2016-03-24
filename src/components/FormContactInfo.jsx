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
                    <label className="col-sm-3 control-label">Phone:</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" { ...phone } />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Email:
                    </label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" { ...email } />
                        { email.touched && email.error &&
                            <div className="text-danger">{ email.error }</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
