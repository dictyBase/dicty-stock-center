import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class FormOrganization extends Component {
    displayName = 'component for organization/lab/group info';

    static propTypes = {
        org: PropTypes.object.isRequired,
        group: PropTypes.object.isRequired
    }

    render() {
        const { org, group } = this.props
        return (
            <div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">
                        <span className="text-danger">* </span>
                        Organization
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
                        Lab/Group
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
