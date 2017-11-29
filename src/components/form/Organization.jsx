import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroupInput from './FormGroupInput'
import { RequiredText } from 'styles'

export default class Organization extends Component {
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
                    <RequiredText title="required field">* </RequiredText>
                    Organization:
                </FormGroupInput>
                <FormGroupInput field={ group } >
                    <RequiredText title="required field">* </RequiredText>
                    Lab/Group:
                </FormGroupInput>
            </div>
        )
    }
}
