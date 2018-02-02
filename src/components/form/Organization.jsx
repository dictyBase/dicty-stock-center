// @flow
import React, { Component } from 'react'
import FormGroupInput from './FormGroupInput'
import { RequiredText } from 'styles'

type Props = {
    org: Object,
    group: Object
}

export default class Organization extends Component<Props> {
    displayName = 'component for organization/lab/group info';

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
