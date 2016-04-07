import React, { Component, PropTypes } from 'react'
import FormGroupInput from './FormGroupInput'
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
                <FormGroupInput field={ org } >
                    <span className="text-danger" title="required field">* </span>
                    Organization:
                </FormGroupInput>
                <FormGroupInput field={ group } >
                    <span className="text-danger" title="required field">* </span>
                    Lab/Group:
                </FormGroupInput>
            </div>
        )
    }
}
