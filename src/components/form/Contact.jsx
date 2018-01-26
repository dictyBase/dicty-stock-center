import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroupInput from './FormGroupInput'
import { RequiredText } from 'styles'

export default class Contact extends Component {
    displayName = 'form contact information';

    static propTypes = {
        phone: PropTypes.object.isRequired
    }

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
