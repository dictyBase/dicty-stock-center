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
                        Organization:
                    </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" { ...org } />
                        { org.touched && org.error &&
                            <div className="text-danger">{ org.error }</div>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Lab/Group:
                    </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" { ...group } />
                        { group.touched && group.error &&
                            <div className="text-danger">{ group.error }</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
