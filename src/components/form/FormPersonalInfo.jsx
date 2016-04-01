import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormPersonalInfo extends Component {
    displayName = 'form personal information';

    static propTypes = {
        firstName: PropTypes.object.isRequired,
        lastName: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired
    }

    render() {
        const { firstName, lastName, email } = this.props
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        First Name:
                    </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" {...firstName} />
                        { firstName.touched && firstName.error &&
                            <div className="text-danger">{ firstName.error }</div>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Last Name:
                    </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" { ...lastName } />
                        { lastName.touched && lastName.error &&
                            <div className="text-danger">{ lastName.error }</div>
                        }
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
