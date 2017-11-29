import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormGroupInput from './FormGroupInput'
import { RequiredText } from 'styles'

export default class Personal extends Component {
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
                <FormGroupInput field={ firstName } >
                    <RequiredText>* </RequiredText>
                    First Name:
                </FormGroupInput>
                <FormGroupInput field={ lastName } >
                    <RequiredText>* </RequiredText>
                    Last Name:
                </FormGroupInput>
                <FormGroupInput field={ email } >
                    <RequiredText>* </RequiredText>
                    Email:
                </FormGroupInput>
            </div>
        )
    }
}
