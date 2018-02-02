// @flow
import React, { Component } from 'react'
import FormGroupInput from './FormGroupInput'
import { RequiredText } from 'styles'

type Props = {
    phone: Object
}

export default class Contact extends Component<Props> {
    displayName = 'form contact information'

    render() {
        const { phone } = this.props
        return (
            <div>
                <FormGroupInput field={ phone }>
                    <RequiredText title="required field">* </RequiredText>
                    Phone:
                </FormGroupInput>
            </div>
        )
    }
}
